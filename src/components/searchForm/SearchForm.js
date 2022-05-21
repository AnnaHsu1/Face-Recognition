import React from "react";
import "./SearchForm.css";

const SearchForm = ({inputChange, onSubmit}) => {
        return(
            <div className="f3">
                <p>This app detects faces in pictures. Give it a try!</p>
                <div className="center">
                    <div className="center form pa4 br3 shadow-5">
                        <input type='text' placeholder="Upload image link" className="pa2 f4 w-70 center" onChange={inputChange} />
                        <button className="pa2 f5 w-30 dib grow ph3 pv2 link bg-light-purple white ba b--light-gray" onClick={onSubmit}>Detect</button>
                    </div>
                </div>
            </div>
        );
}

export default SearchForm;