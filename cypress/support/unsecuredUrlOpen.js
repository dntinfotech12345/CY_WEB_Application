export const usecuredUrlOpen = async function (url) {
    cy.intercept("GET", "**", (req) => {
      req.headers["Accept"] = "";
      req.headers["User-Agent"] = "CustomUserAgent/1.0";
    }).as("customRequest");
    cy.visit(url);
    cy.viewport(1920, 1080);
  };