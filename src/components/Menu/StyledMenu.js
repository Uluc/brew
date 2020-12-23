import styled from 'styled-components';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

export const StyledTabs = styled(Tabs)`
    
`;

export const StyledTab = styled(Tab)`
    background: transparent;
	border: 0;
    font-family: 'Numans', sans-serif;
	padding: 1rem 2rem;
    transition: background 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
`;

export const StyledTabList = styled(TabList)`
    border-bottom: 1px solid #ddd;
`;

export const StyledTabPanel = styled(TabList)`

`;


