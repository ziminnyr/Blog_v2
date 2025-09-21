import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthFormError, Button, H2, Input } from "../../components";
import { useResetForm } from "../../hooks";
import { setUser } from "../../actions";
import styled from "styled-components";
import { selectUserRole } from "../../selectors";
import { ROLE } from "../../constants";
import { request } from "../../utils";

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required("Заполните логин")
		.matches(
			/^\w+$/,
			"Неверно заполнен логиню Допускаются только буквы и цифры",
		)
		.min(3, "Неверно заполнен логин. Минимум 3 символа")
		.max(15, "Неверно заполнен логин. Максимум 15 символов"),
	password: yup
		.string()
		.required("Заполните пароль")
		.matches(
			/^[\w#%]+$/,
			"Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %",
		)
		.min(6, "Неверно заполнен логин. Минимум 6 символа")
		.max(30, "Неверно заполнен логин. Максимум 30 символов"),
});

const StyledLink = styled(Link)`
	text-align: center;
	text-decoration: underline;
	margin: 15px 0;
	font-size: 1rem;
`;

const AutoriztionContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: "",
			password: "",
		},
		resolver: yupResolver(authFormSchema),
	});

	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole);

	useResetForm(reset);

	const onSubmit = ({ login, password }) => {
		request("/login", "POST", { login, password }).then(
			({ error, user }) => {
				if (error) {
					setServerError(`Ошибка запроса на сервер: ${error}`);
					return;
				}
				dispatch(setUser(user));
				sessionStorage.setItem("userData", JSON.stringify(user));
			},
		);
	};

	const formError = errors?.login?.message || errors?.password?.message;
	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин..."
					{...register("login", {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Пароль..."
					{...register("password", {
						onChange: () => setServerError(null),
					})}
				/>
				<Button type="submit" disabled={!!formError}>
					Авторизоваться
				</Button>
				{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
				<StyledLink to="/register">Регистрация</StyledLink>
			</form>
		</div>
	);
};

export const Autorization = styled(AutoriztionContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;

	& > form {
		display: flex;
		flex-direction: column;
		width: 260px;
	}
`;
