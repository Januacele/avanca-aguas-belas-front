import React from 'react'
import GridWrapper from '../../common/gridWrapper/GridWrapper';
import BasicCard from '../../common/basicCard/BasicCard';
import ProgressStepper from '../../common/progressStepper/ProgressStepper';

const steps = ['Step 1', 'Step 2', 'Step 3'];
const stepDescription = ['Description 1', 'Description 2', 'Description 3'];

export const GeneralResults = () => {
    return (
        <GridWrapper>
            <BasicCard
                content={
                    <ProgressStepper
                        steps={steps}
                        stepDescription={stepDescription}
                    />
                } 
            />
        </GridWrapper>
    )
}

export default GeneralResults