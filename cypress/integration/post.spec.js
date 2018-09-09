describe("Posts", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("succesfully adds new post", () => {
    const photoURLValue =
      "https://instagram.fsjj1-1.fna.fbcdn.net/vp/98903879572ac0702a2df710a1f7265a/5BFDBDA9/t51.2885-15/e35/33116760_232792214143113_4166752068264001536_n.jpg";
    cy.get("[data-cy=photo-url-input]").type(photoURLValue);
    cy.get("[data-cy=photo-url-submit]").click();
  });

  it("succesfully bookmarks a post", () => {
    cy.get("[data-cy=bookmark-btn]")
      .first()
      .click();
  });

  it("succesfully unbookmarks a post", () => {
    cy.get("[data-cy=unbookmark-btn]")
      .first()
      .click();
  });

  it("succesfully likes a post", () => {
    cy.get("[data-cy=like-btn]")
      .first()
      .click();
  });

  it("succesfully unlikes a post", () => {
    cy.get("[data-cy=unlike-btn]")
      .first()
      .click();
  });
});
