import { request } from "../utils/request.js";
import { setPostData } from "./set-post-data.js";

export const loadPostAsync = (postId) => (dispatch) =>
	request(`/posts/${postId}`).then((postData) => {
		if (postData.data) {
			dispatch(setPostData(postData.data));
		}

		return postData;
	});
