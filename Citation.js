import React from "react";
import "./CssFile/Citation.css";

const Citation = () => {
  return (
    <>
      <div className="form-area">
        <div className="container">
          <div className="row single-form g-0">
            <div className="col-sm-12 col-lg-6">
              <div className="left">
                <h2>
                  <span>Local Citation </span> <br />
                  Order Details
                </h2>
                
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="right">
                <i className="fa fa-caret-left"></i>
                <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Your Name (used only for report)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      * Email (used only for report)
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <br />
                  <hr />
                  <div className="Cheading">
                    <h2>Information We Need To Create The Citations</h2>
                  </div>
                  <label for="exampleInputEmail1" className="form-label">
                    Number of Citations
                  </label>
                  <br />
                  <br />
                  <select name="package" class="clr form-control " id="total">
                    <option value="0">5 Local Citations[TAT 5 Days] </option>
                    <option value="1">40 Local Citations[TAT 8 Days] </option>
                    <option value="2">80 Local Citations[TAT 10 Days] </option>
                    <option value="3">350 Local Citations[TAT 16 Days] </option>
                    <option value="4">120 Local Citations[TAT 11 Days] </option>
                    <option value="5">200 Local Citations[TAT 13 Days] </option>
                    <option value="6">240 Local Citations[TAT 14 Days] </option>
                  </select>
                  <br />
                  <label
                    for="exampleInputEmail1"
                    className="form-label fw-bold"
                  >
                    Choose your Country
                  </label>

                  <select class="clr form-control" name="country">
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>other</option>
                  </select>
                  <br />

                  <div className="mb-3">
                    <label
                      for="exampleInputPassword1"
                      className="form-label fw-bold"
                    >
                      Description Short: Min 150 characters and Max 256
                    </label>
                    <br />
                    <textarea
                      name="description"
                      class="form-control"
                      tabindex="0"
                      rows="10"
                      cols="50"
                      required=""
                    ></textarea>
                  </div>
                  <label
                    for="exampleInputEmail1"
                    className="form-label fw-bold"
                  >
                    Business Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <label
                    for="exampleInputEmail1"
                    className="form-label fw-bold"
                  >
                    business Address:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <br />
                  <label for="exampleInputEmail1" className="form-label">
                    ACN/ABN (Applicable for Australia only)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <br />
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Social Media Links (GooglePlus, Facebook, Twitter etc..)
                    </label>
                    <textarea
                      type="text"
                      class="fomr-control"
                      name="socialLinks"
                      rows="10"
                      cols="50"
                      tabindex="0"
                    ></textarea>
                  </div>
                  <br />
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      List of directories (If you want to provide your own list)
                    </label>
                    <textarea
                      type="text"
                      class="fomr-control"
                      name="socialLinks"
                      rows="10"
                      cols="50"
                      tabindex="0"
                    ></textarea>
                  </div>
                  <br />
                  <br />
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      INSTRUCTIONS /NOTE!
                    </label>
                    <textarea
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    ></textarea>
                  </div>
                  <br />
                  <p>
                    <span>NOTE:</span> If you want us to sign up using your
                    email (not necessary as we will create one for you and you
                    will have full access) then please reply to the confirmation
                    email with all your email info as our new order form
                    provider doesn't allow it. Thank you! Submitting order may
                    take a little time due to uploading the images The fields
                    that have (*) are mandatory
                  </p>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Citation;
