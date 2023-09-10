/// <reference types="Cypress" />
import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";
import NobiNavigation_PO from "../../support/pageObjects/NobiNavigation_PO";

const nobiLogin_PO = new NobiLogin_PO();
const nobiNavigation_PO = new NobiNavigation_PO();

describe("BackEnd Nav to Related devices options", () => {
  const nobiLogin_PO = new NobiLogin_PO();

  /**
   * Global declarations
   */
  let NobiAdminUser;
  before(() => {
    cy.fixture("NobiAdminUser").then((user) => {
      NobiAdminUser = user;
    });
  });

  beforeEach(() => {
    nobiLogin_PO.VisitNobi("nobiDev");
    nobiLogin_PO.LoginData(NobiAdminUser.username, NobiAdminUser.password);
    nobiLogin_PO.SignIn();
  });

  afterEach(() => {
    cy.get("#logout").click();
    nobiLogin_PO.MsgBox("Signed out successfully");
  });

  it("Related device", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
  });

  it("Bluetooth errors", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#bluetooth_errors").contains("Bluetooth errors").click();
    cy.get("#page_title").should("have.text", "Bluetooth errors");
  });

  it("Boot Logs", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#boot_logs").contains("Boot Logs").click();
    cy.get("#page_title").should("have.text", "Boot Logs");
  });

  it("Captures", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#device_captures").contains("Captures").click();
    cy.get("#page_title").should("have.text", "Captures");
  });

  it("Connections", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#connections").contains("Connections").click();
    cy.get("#page_title").should("have.text", "Connections");
  });

  it("Device Issues", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#views_device_issues").contains("Device Issues").click();
    cy.get("#page_title").should("have.text", "Device Issues");
  });

  it("Device Parameters", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#device_parameters").contains("Device Parameters").click();
    cy.get("#page_title").should("have.text", "Device Parameters");
  });

  it("Devices", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#devices").contains("Devices").click();
    cy.get("#page_title").should("have.text", "Devices");
  });

  it("Dumps", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#dumps").contains("Dumps").click();
    cy.get("#page_title").should("have.text", "Dumps");
  });

  it("Hardware Devices", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#hardware_devices").contains("Hardware Devices").click();
    cy.get("#page_title").should("have.text", "Hardware Devices");
  });

  it("Housing units", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#housing_units").contains("Housing units").click();
    cy.get("#page_title").should("have.text", "Housing units");
  });

  it("Ignored Poses", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#ignored_poses").contains("Ignored Poses").click();
    cy.get("#page_title").should("have.text", "Ignored Poses");
  });

  it("Object detections", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#object_detections").contains("Object detections").click();
    cy.get("#page_title").should("have.text", "Object detections");
  });

  it("Peripherals", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#peripherals").contains("Peripherals").click();
    cy.get("#page_title").should("have.text", "Peripherals");
  });

  it("Person Poses", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#person_poses").contains("Person Poses").click();
    cy.get("#page_title").should("have.text", "Person Poses");
  });

  it("Radar detections", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#radar_detections").contains("Radar detections").click();
    cy.get("#page_title").should("have.text", "Radar detections");
  });

  it("Speech Recordings", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#speech_recordings").contains("Speech Recordings").click();
    cy.get("#page_title").should("have.text", "Speech Recordings");
  });

  it("Speeches", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#speeches").contains("Speeches").click();
    cy.get("#page_title").should("have.text", "Speeches");
  });

  it("Tunnels", () => {
    nobiNavigation_PO.ExpandMenu("Related device", "device_related");
    cy.get("#hardware_device_tunnels").contains("Tunnels").click();
    cy.get("#page_title").should("have.text", "Tunnels");
  });
});
