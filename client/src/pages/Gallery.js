import React, {Fragment} from 'react';

export default function Gallery() {
    return(
       <Fragment>
        <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" uk-grid>
        <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
        <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
        </div>
    </div>
    </Fragment>
    )



}