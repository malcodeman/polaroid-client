describe("Log In", () => {
  it("succesfully performs login action", () => {
    const usernameValue = "test";
    const passwordValue = "test";
    cy.visit("/");
    // Types in username
    cy.get("input[name=username]")
      .type(usernameValue)
      .should("have.value", usernameValue);
    // Types in password
    cy.get("input[name=password]")
      .type(passwordValue)
      .should("have.value", passwordValue);
    // Clicks log in button
    cy.get("button").click();
  });
});
