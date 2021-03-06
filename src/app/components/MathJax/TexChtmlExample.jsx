import React, { PureComponent } from 'react'
import { Box, Button, TextareaAutosize, Typography } from '@material-ui/core'
import StudentProgress from './StudentProgress'

class TexChtmlExample extends PureComponent {

    render () {
        return (
            <Box p={2}>
                <Typography data-testid="mathMlContentHeader" variant="h6" component="h6" gutterBottom>
                    MathMl content
                </Typography>
                <TextareaAutosize data-testid="mathMlContentHeader" aria-label="minimum height" rowsMin={10} placeholder="Put mathMl context" />
                <Box py={1}>
                    <Button data-testid="applyMathMlContent" variant="contained" color="primary">
                        Apply
                    </Button>
                </Box>
                <Typography data-testid="mathMlContentHeader" variant="h6" component="h6" gutterBottom>
                    MathMl content view
                </Typography>
                <Box>
                    <StudentProgress
                        pointsRange={[{ points: 5, range: 10 }, { points: 10, range: 60 }, { points: 12, range: 80 }, { points: 15, range: 100 }]}
                        currentProgress={5}
                        highestProgres={100}
                    />
                </Box>
                <Box>
                    <Typography data-testid="mathMlContentHeader" variant="h6" component="h6" gutterBottom>
                        MathMl content view2
                    </Typography>
                </Box>
            </Box>
        )
    }
}
export default TexChtmlExample