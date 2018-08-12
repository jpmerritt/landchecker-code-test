// Update with your config settings.

module.exports = {
	development: {
		client: "postgresql",
		connection: {
			database: "landchecker-code-test",
			user: "jpmerritt",
			password: ""
		},
		pool: {
			min: 2,
			max: 10
		}
	}
};
