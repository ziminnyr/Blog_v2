import { useEffect, useLayoutEffect, useState } from "react";
import { useMatch, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Comments, PostContent, PostForm } from "./components";
import { Error, PrivateContent } from "../../components";
import { loadPostAsync, RESET_POST_DATA } from "../../actions";
import { selectPost } from "../../selectors";
import { ROLE } from "../../constants";
import styled from "styled-components";

const PostContainer = ({ className }) => {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const params = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const isCreating = !!useMatch("/post");
	const isEditing = !!useMatch("/post/:id/edit");

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	const post = useSelector(selectPost);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}

		dispatch(loadPostAsync(params.id)).then((postData) => {
			setError(postData.error);
			setIsLoading(false);
		});
	}, [dispatch, params.id, isCreating]);

	if (isLoading) {
		return null;
	}

	const SpecificPostPage =
		isCreating || isEditing ? (
			<PrivateContent access={[ROLE.ADMIN]} serverError={error}>
				<div className={className}>
					<PostForm post={post} />
				</div>
			</PrivateContent>
		) : (
			<div className={className}>
				<PostContent post={post} />
				<Comments comments={post.comments} postId={post.id} />
			</div>
		);

	return error ? <Error error={error} /> : SpecificPostPage;
};

export const Post = styled(PostContainer)`
	padding: 0 80px;
	margin: 40px 0;
`;
