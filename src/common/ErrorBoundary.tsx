import { Box, Typography } from '@mui/material';
import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {hasError:false, errorInfo:null}
    }

    // this function will be called if there is any error
    componentDidCatch(error, errorInfo){
        this.setState({
            hasError:true,
            errorInfo:error
        })
    }
  render() {
    if(this.state.hasError){
        return<>
            <Typography>Something Went Wrong</Typography>
            <Box>{this.state.errorInfo.toString()}</Box>
        </>
    }
    return this.props.children;
  }
}
