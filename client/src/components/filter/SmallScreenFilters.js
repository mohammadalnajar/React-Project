import React from 'react';
import { BrandFilter } from './BrandFilter';
import { OsFilter } from './OsFilter';
import { PriceFilter } from './PriceFilter';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export const SmallScreenFilters = ({ devices, setDevices, devicesGlobal }) => {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Brand Filter
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BrandFilter
            devices={devices}
            setDevices={setDevices}
            devicesGlobal={devicesGlobal}
            bigScreen={bigScreen}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Brand Filter
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <OsFilter
            devices={devices}
            setDevices={setDevices}
            devicesGlobal={devicesGlobal}
            bigScreen={bigScreen}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Brand Filter
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PriceFilter
            devices={devices}
            setDevices={setDevices}
            devicesGlobal={devicesGlobal}
            bigScreen={bigScreen}
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
};
