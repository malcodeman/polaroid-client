Cypress.Commands.add("login", (username = "test", password = "test") => {
  localStorage.clear();
  cy.request("POST", "http://localhost:9001/api/v1/auth/login", {
    username,
    password
  }).then(response => {
    const { token } = response.body;
    localStorage.setItem("token", token);
  });
});
