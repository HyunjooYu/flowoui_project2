// Input Form Alice

export default function InputForm() {
	return (
		<>
			<h2
				style={{
					marginBottom: 10,
				}}
			>
				Sign In
			</h2>
			<form id='signupForm'>
				<div>
					<label htmlFor='username'>Username:</label>
					<input
						type='text'
						id='username'
						name='username'
						required
					/>
				</div>

				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						name='email'
						required
					/>
				</div>

				<button
					type='submit'
					style={{
						padding: "2px 20px",
						margin: "12px 0",
					}}
				>
					Submit
				</button>
			</form>
		</>
	);
}
