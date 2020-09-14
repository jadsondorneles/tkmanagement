import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

import ContainerPage from '../../components/ContainerPage/index'
import Task from '../../components/Task/index'

import FloatingButton from '../../components/FloatingButton/index'

import { FloatButton } from './styles'

import api from '../../services/api'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box p={3}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}))

export default () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const [tasks, setTasks] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    }

    async function getTasks() {
        api.get('/api/task')
        .then(response => {
            setTasks(response.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <ContainerPage>
            <AppBar position="static" color="default">
                <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
                >
                <Tab data-class="lbl-ok" label="Ok" {...a11yProps(0)} />
                <Tab data-class="lbl-overdue" label="Overdue" {...a11yProps(1)} />
                <Tab data-class="lbl-fine" label="Fine" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction} className="TabPanelBox">
                    {
                        tasks.map((obj, index) => (
                            obj.status === "ok"
                            ?
                            <Task key={index} name={obj.name} customer={obj.customer} due_date={obj.due_date} legal_date={obj.legal_date} status={obj.status} documents={obj.documents} />
                            : null
                        ))
                    }
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    {
                        tasks.map((obj, index) => (
                            obj.status === "overdue"
                            ?
                            <Task key={index} name={obj.name} customer={obj.customer} due_date={obj.due_date} legal_date={obj.legal_date} status={obj.status} documents={obj.documents} />
                            : null
                        ))
                    }
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    {
                        tasks.map((obj, index) => (
                            obj.status === "fine"
                            ?
                            <Task key={index} name={obj.name} customer={obj.customer} due_date={obj.due_date} legal_date={obj.legal_date} status={obj.status} documents={obj.documents} />
                            : null
                        ))
                    }
                </TabPanel>
            </SwipeableViews>
        </ContainerPage>
    )
}