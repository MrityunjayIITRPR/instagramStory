describe("Instagram Story Viewer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("should display the StoryList with users", () => {
    cy.get(".story-list").should("be.visible");
    cy.get(".story-item").should("have.length.greaterThan", 0);
  });

  it("should open a user's story, navigate to the next story, and close viewer", () => {
    cy.get(".story-item").first().click({ force: true });
    cy.wait(1000);
    cy.get(".story-viewer").should("be.visible");

    cy.get(".next-btn").click({ force: true });
    cy.wait(1000);
    cy.get(".story-image").should("be.visible");

    cy.get(".close-btn").click({ force: true });
    cy.wait(1000);
    cy.get(".story-list").should("be.visible");
  });
});
