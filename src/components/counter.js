import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron" align="center">
            <h2>{ counter }</h2>
            <button    
                className="btn btn-primary btn-large"
                onClick={ dec }>
                    DEC
            </button>
            <button    
                className="btn btn-primary btn-large"
                onClick={ inc }>
                    INC
            </button>
            <button    
                className="btn btn-primary btn-large"
                onClick={ rnd }>
                    RND
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

const mapDispatchToProps = (dispatch) => {

    const { inc, dec, rnd} = bindActionCreators(actions, dispatch);
    return {
        inc,
        dec,
        rnd: () => {
            const value = Math.floor(Math.random() * 10);
            rnd(value);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);