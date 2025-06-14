import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link'; // Use Next.js's Link component for routing

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Adjust the size as needed

  if (isMobile) {
    return null; // Hide sidebar on small screens
  }

  return (
    <div className="sidebar">
      <ul style={{ marginLeft: '20px' }}>
        <li><Link href="/speaking">Speaking Test</Link></li>
        <li><Link href="/listening">Listening Test</Link></li>
        <li><Link href="/reading">Reading Test</Link></li>
        <li><Link href="/writing/Task1">Writing Task 1</Link></li>
        <li><Link href="/speaking/Task1">Speaking Task 1</Link></li>
        <li><Link href="/speaking/Task2">Speaking Task 2</Link></li>
        <li><Link href="/writing/Task2">Writing Task 2</Link></li>
        <li><Link href="/speaking/Task5">Speaking Task 5</Link></li>
        <li><Link href="/speaking/Task8">Speaking Task 8</Link></li>
        {/* <li><Link href="/vocabulary">Vocabulary</Link></li> */}
        <li><Link href="/PreparationTips">Tips</Link></li>
        <li><Link href="/scoringcriteria">Scoring Criteria</Link></li>
        <li><Link href="/banddescriptors">Band Descriptors</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
