describe("Add new post", () => {
  it("succesfully adds new post", () => {
    const photoURLValue =
      "https://instagram.fsjj1-1.fna.fbcdn.net/vp/98903879572ac0702a2df710a1f7265a/5BFDBDA9/t51.2885-15/e35/33116760_232792214143113_4166752068264001536_n.jpg";
    cy.login();
    cy.visit("/");
    cy.get("[data-cy=photo-url-input]").type(photoURLValue);
    cy.get("[data-cy=photo-url-submit]").click();
  });
});
