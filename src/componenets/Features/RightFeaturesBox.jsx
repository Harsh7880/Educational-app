import React from 'react'
import BoxSm from './BoxSm'
import images1 from '../../images/abstraction.svg';
import images2 from '../../images/pattern.svg';
import images3 from '../../images/decom.svg';

const RightFeaturesBox = () => {
    return (
        <div>
            <div className="list">
                <BoxSm image={images1} title={'Abstraction '} info={'To remove unneccessary data'} />
                <BoxSm image={images2} title={'Patterns'} info={'To make use of similarities'} />
                <BoxSm image={images3} title={'Decomposition '} info={' Break down a problem'} />
            </div>

        </div>
    )
}

export default RightFeaturesBox
