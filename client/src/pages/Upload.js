import React, {Fragment} from 'react';

export default function Upload() {
    return(
    <Fragment>
     <div className="uk-margin">
        <span className="uk-text-middle">Here is a text</span>
        <div uk-form-custom>
            <input type="file"/>
            <span className="uk-link">upload</span>
         </div>
      </div>
    </Fragment>
    )



}