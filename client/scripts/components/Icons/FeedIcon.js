import React from 'react';

import BaseIcon from './BaseIcon';

export default class FeedIcon extends BaseIcon {
  render() {
    return (
      <svg className={`icon icon--feed ${this.props.className}`}
        viewBox={this.getViewBox()}>
        <path d="M18.47,47.88A6.49,6.49,0,1,0,12,54.38,6.5,6.5,0,0,0,18.47,47.88Zm18,3.51a30.41,30.41,0,0,0-8.85-19.12A30.33,30.33,0,0,0,8.48,23.41H8.31A2.07,2.07,0,0,0,6.85,24a2.06,2.06,0,0,0-.71,1.59v4.57a2.14,2.14,0,0,0,2,2.13A21.64,21.64,0,0,1,27.57,51.77a2.14,2.14,0,0,0,2.13,2h4.56A2.06,2.06,0,0,0,35.85,53,2.19,2.19,0,0,0,36.42,51.4Zm17.3,0.07a47.68,47.68,0,0,0-14-31.37,47.55,47.55,0,0,0-31.33-14H8.31a2.1,2.1,0,0,0-1.49.61,2.07,2.07,0,0,0-.68,1.56v4.84a2.15,2.15,0,0,0,2,2.13A38.72,38.72,0,0,1,44.57,51.7a2.15,2.15,0,0,0,2.16,2h4.83A2.19,2.19,0,0,0,53.73,51.46Z"/>
      </svg>
    );
  }
}
