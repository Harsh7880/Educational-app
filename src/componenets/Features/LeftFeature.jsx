import React from 'react'
import BoxSm from './BoxSm'
import images2 from '../../images/algorithms.svg';
import images3 from '../../images/logic.svg';
import images5 from '../../images/evalution.svg';

const LeftFeature = () => {
    return (
        <>
        <div className="list">
                <BoxSm image={images3} title={'Logic'} info={'for predicting & analysis'} />
                <BoxSm image={images5} title={'Evalution'} info={'involves making judgment'} />
                <BoxSm image={images2} title={'Algorithms'} info={'to make steps & rules'} />
        </div>

        </>
    )
}

export default LeftFeature
