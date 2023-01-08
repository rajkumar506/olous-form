import React, { useState } from "react";
import styles from "./Form.module.css";
export const Form = () => {
  const intialValue = {
    areYou: "",
    selectCategory: "",
    subcategory: "",
    textarea: "",
    country: "",
    city: "",
    currency: "",
    values: "",
    contactName: "",
    contactCity: "",
    contactCountry: "",
    telephone: "",
    contactEmail: "",
    contactCompany: "",
  };
  const [formData, setFormData] = useState(intialValue);
  const handleFormData = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className={styles["Container"]}>
        <div style={{ fontSize: "32px", marginBottom: "16px" }}>
          Need Vendor, &nbsp; Consultant , &nbsp; Contractor ?
        </div>
        <div>
          <img className={styles["vehicle-icon-image"]} src="/Icons/Vector.svg" />
        </div>
        <div style={{ lineHeight: "32px" }}>
          Fill in your requirements and contact details, and we’ll help you
          connect
          <br />
          with the right business!
        </div>
        <div>* &nbsp;Mandatory</div>
        <form>
          <div>
            <span style={{ marginRight: "18px" }}>* Are you ?</span>
            <input
              type="radio"
              checked={true}
              name="are you"
              value="Individual"
              onChange={(e) => {
                handleFormData(e);
              }}
            />
            <label htmlFor="Individual" name="Individual">
              Individual
            </label>
            <input
              type="radio"
              name="areYou"
              value="Company"
              onChange={(e) => {
                handleFormData(e);
              }}
            />
            <label htmlFor="Company">Company</label>
          </div>
          <div>
            <div>* What are you looking for ? choose from below.</div>
            <select
              name="selectCategory"
              value={formData["selectCategory"]}
              onChange={(e) => {
                handleFormData(e);
              }}
              required
            >
              <option hidden>Select Category</option>
              <option>Consultant</option>
              <option>Doctor</option>
              <option>Engineer</option>
              <option>Cricketet</option>
              <option>Contractor</option>
            </select>
          </div>
          <div>
            <div>
              * Select from below sub category to reach the right connect
            </div>
            <select
              name="subcategory"
              value={formData["subcategory"]}
              onChange={(e) => {
                handleFormData(e);
              }}
              required
            >
              <option hidden>Sub Category</option>
              <option>Consultant</option>
              <option>Consultant</option>
              <option>Consultant</option>
              <option>Consultant</option>
              <option>Consultant</option>
            </select>
          </div>
          <div>
            <div>Write your requirements</div>
            <textarea
              placeholder="write your require ments in 200 words"
              name="textarea"
              value={formData["textarea"]}
              onChange={(e) => {
                handleFormData(e);
              }}
            ></textarea>
          </div>
          <div>
            <div>* Work Location</div>
            <input
              className={styles["country-input"]}
              type="text"
              name="country"
              placeholder="Country"
              value={formData["country"]}
              onChange={(e) => {
                handleFormData(e);
              }}
              required
            />
            <input
              className={styles["country-input"]}
              type="text"
              placeholder="City"
              name="city"
              value={formData["city"]}
              onChange={(e) => {
                handleFormData(e);
              }}
              required
            />
          </div>
          <div>
            <div>
              Expected Values of Works <span>( select from below):</span>
              <div className={styles["currency-value-container"]}>
                <div className={styles["currency-container"]}>
                  {" "}
                  <span>Currency</span>
                  <input
                    className={styles["currency-input"]}
                    type="text"
                    value={formData["currency"]}
                    name="currency"
                    placeholder="Rupee"
                    onChange={(e) => {
                      handleFormData(e);
                    }}
                  />
                </div>
                <div className={styles["values-container"]}>
                  <span>Values</span>
                  <select
                    style={{ width: "264px" }}
                    name="values"
                    value={formData["values"]}
                    onChange={(e) => {
                      handleFormData(e);
                    }}
                  >
                    <option>50K to 1 Lakh</option>
                    <option>1Lakh to 5Lakh</option>
                    <option>5Lakh to 10Lakh</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>* Your Contact details</div>
            <div className={styles["contact-details"]}>
              <div>
                <input
                  className={styles["country-input"]}
                  type="text"
                  value={formData["contactCountry"]}
                  placeholder="Country"
                  name="contactCountry"
                  onChange={(e) => {
                    handleFormData(e);
                  }}
                  required
                />
                <input
                  className={styles["country-input"]}
                  type="text"
                  placeholder="City"
                  name="contactCity"
                  value={formData["contactCity"]}
                  onChange={(e) => {
                    handleFormData(e);
                  }}
                  required
                />
              </div>

              <div>
                <input
                  className={styles["country-input"]}
                  type="text"
                  name="contactName"
                  placeholder="Name"
                  value={formData["contactName"]}
                  onChange={(e) => {
                    handleFormData(e);
                  }}
                  required
                />
                <input
                  className={styles["country-input"]}
                  type="text"
                  name="contactCompany"
                  placeholder="Company"
                  value={formData["contactCompany"]}
                  onChange={(e) => {
                    handleFormData(e);
                  }}
                  required
                />
              </div>

              <div>
                <input
                  className={styles["country-input"]}
                  type="text"
                  name="contactEmail"
                  placeholder="Email"
                  value={formData["contactEmail"]}
                  onChange={(e) => {
                    handleFormData(e);
                  }}
                  required
                />
                <input
                  className={styles["country-input"]}
                  type="tel"
                  name="telephone"
                  placeholder="Mob"
                  value={formData["telephone"]}
                  onChange={(e) => {
                    handleFormData(e);
                  }}
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles["button-div"]}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <footer>
        <div>
          <img src="/Icons/OlousLogo.png" alt="logo" />
        </div>
        <div className={styles["icons-grand-parent-container"]}>
          <div className={styles["support-container"]}>
            <span>Terms & Conditions</span>
            <span>|</span>
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Support</span>
          </div>
          <div className={styles["icons-container"]}>
            <img src="/Icons/Facebook.svg" alt="Fcaebook" />
            <img src="/Icons/Instagram.svg" alt="Instgram" />
            <img src="/Icons/Linkdine.svg" alt="Linkedin" />
            <img src="/Icons/Youtube.svg" alt="Yuoutube" />
            <img src="/Icons/Twitter.svg" alt="Twitter" />
          </div>
        </div>
      </footer>
    </>
  );
};
