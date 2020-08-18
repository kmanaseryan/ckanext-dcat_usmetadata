import "chance"

Cypress.Commands.add("requiredMetadata", () => {
  cy.get("input[name=title]").type(chance.word({ length: 5 }))
  cy.get("textarea[name=description]").type(chance.sentence({ words: 4 }))
  cy.get("select[name=publisher]").select("Publisher 1")
  cy.get("select[name=subagency]").type("Sub Agency 1")
  cy.get("input[name=contactPoint]").type(chance.name())
  cy.get("input[name=contactEmail]").type(chance.email())
  cy.get("input[name=identifier]").type(chance.string({ length: 10 }))
  cy.get("select[name=accessLevel]").select("public")
  cy.get("select[name=dataQuality]").select("Yes")
  cy.get("select[name=license]").select("Others")
  cy.get("input[name=license_others]").type(chance.sentence({ words: 3 }))
  cy.get("#rights_option_1")
    .parent(".form-group")
    .click()
  cy.get("#spatial_option_2")
    .parent(".form-group")
    .click()
  cy.get("input[name=spatial_location_desc]").type(
    chance.sentence({ words: 2 })
  )
  cy.get("#temporal_option_2")
    .parent(".form-group")
    .click()
  cy.get("input[name=temporal_start_date]").type("2010-11-11")
  cy.get("input[name=temporal_end_date]").type("2020-11-11")
  cy.get("button[type=submit").click()
})

Cypress.Commands.add("additionalMetadata", () => {
  cy.get("input[name=themes]").type(chance.sentence({ words: 2 }))
  cy.get("input[name=describedBy").type(chance.email())
  cy.get("select[name=describedByType]").select("Data 1")
  cy.get("select[name=accrualPeriodicity]").select("TODO 1")
  cy.get("input[name=landingPage]").type(chance.url())
  cy.get("select[name=language]").select("TODO 1")
  cy.get("input[name=primaryITInvestmentUII]").type(
    chance.string({ length: 10 })
  )
  cy.get("input[name=references]").type(chance.sentence({ words: 3 }))
  cy.get("input[name=issued]").type(chance.word())
  cy.get("input[name=systemOfRecords]").type(chance.sentence({ words: 3 }))
  cy.get("select[name=isPartOf]").select("TODO 2")
  cy.get("button[type=submit").click()
})
