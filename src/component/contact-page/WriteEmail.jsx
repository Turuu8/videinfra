export const WriteEmail = () => {
  return (
    <div className="contents">
      <div className="write-email">
        <h3>Write to Us</h3>
        <div className="writing-table">
          <div className="input">
            <input type="text" required="required" />
            <span>Your name</span>
          </div>
          <div className="input">
            <input type="text" required="required" />
            <span>Company name</span>
          </div>
          <div className="input">
            <input type="text" required="required" />
            <span>Phone number</span>
          </div>
          <div className="input">
            <input type="text" required="required" />
            <span>E-mail</span>
          </div>
          <div className="input">
            <input type="text" required="required" />
            <span>
              Comment <span className="optional">(optional)</span>
            </span>
          </div>
          <div className="text-small">
            <span>By clicking the Submit button you agree to our</span>
            <p>
              Privacy Policy &nbsp;
              <span>terms</span>
            </p>
          </div>
          <div className="btn-submit">
            <button>
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
