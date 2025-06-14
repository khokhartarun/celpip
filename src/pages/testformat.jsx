import { Container, Typography, Box, Button, Divider } from '@mui/material';
import Sidebar from '../Common/Sidebar';

const TestFormat = () => {
    const sections = [
        {
            title: 'Listening Section',
            duration: '47-55 minutes',
            numberOfQuestions: '38-39',
            tasks: [
                'Practice Task (not scored)',
                'Listening to Problem Solving',
                'Listening to a Daily Life Conversation',
                'Listening for Information',
                'Listening to a News Item',
                'Listening to a Discussion',
                'Listening to Viewpoints',
            ],
            link: '/listening',
        },
        {
            title: 'Reading Section',
            duration: '55–60 minutes',
            numberOfQuestions: '38–39',
            tasks: [
                'Practice Task (not scored)',
                'Reading Correspondence',
                'Reading to Apply a Diagram',
                'Reading for Information',
                'Reading for Viewpoints',
            ],
            link: '/reading',
        },
        {
            title: 'Writing Section',
            duration: '53–60 minutes',
            numberOfTasks: '2',
            tasks: ['Writing an Email', 'Responding to Survey Questions'],
            link: '/writing',
        },
        {
            title: 'Speaking Section',
            duration: '15-20 minutes',
            numberOfTasks: '8',
            tasks: [
                'Giving Advice',
                'Talking about a Personal Experience',
                'Describing a Scene',
                'Making Predictions',
                'Comparing and Persuading',
                'Dealing with a Difficult Situation',
                'Expressing Opinions',
                'Describing an Unusual Situation',
            ],
            link: '/speaking',
        },
    ];

    return (
        <div className='reading'>
            <Sidebar className="sidebar" />
            <div className="central-control">
                <div className="central-control">
                <br/>
                <h3>Test Format</h3>
                {/* <br/> */}
            <p style={{ color: 'black' }}>The Test Format for <strong>CELPIP General </strong>includes four sections: Listening, Reading, Writing, and Speaking. It evaluates a full range of language skills, testing comprehension and communication through various tasks across each section. The test takes approximately 3 hours to complete and is designed for purposes like immigration and professional designations.</p>
            <br/>
            <p style={{ color: 'black' }}>The <strong>CELPIP General LS </strong>test, however, focuses only on Listening and Speaking sections. It is shorter, lasting about 1 hour, and is commonly used for Canadian citizenship applications, assessing basic communication skills required for daily interactions.</p>
                    <Container>
                        {sections.map((section, index) => (
                            <Box key={index} my={4}>
                                <Typography variant="h5" gutterBottom>
                                    <strong>{section.title}</strong>
                                </Typography>
                                <Typography> <strong>Duration:</strong> {section.duration}</Typography>
                                {section.numberOfQuestions && (
                                    <Typography><strong>Number of Questions:</strong> {section.numberOfQuestions}</Typography>
                                )}
                                {section.numberOfTasks && (
                                    <Typography><strong>Number of Tasks:</strong>{section.numberOfTasks}</Typography>
                                )}
                                <Typography variant="subtitle1" gutterBottom>
                                    <strong>Task Breakdown:</strong>
                                </Typography>
                                <ul>
                                    {section.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex}>
                                            <Typography sx={{ color: 'black', marginLeft: '30px' }}>
                                                {taskIndex + 1}. {task}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="contained" href={section.link} sx={{ mt: 2 }}>
                                    More Details
                                </Button>
                                <Divider sx={{ mt: 4 }} />
                            </Box>
                        ))}
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default TestFormat;
