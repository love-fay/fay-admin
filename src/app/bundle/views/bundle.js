/**
 * Created by feichongzheng on 17/9/12.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bundle extends Component {

    static propTypes = {
        load: PropTypes.any,
        children: PropTypes.any,
    };

    static contextTypes = {
        store: React.PropTypes.object
    };

    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null,
    };

    componentWillMount () {
        this.load(this.props);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    load (props) {
        this.setState({
            mod: null,
        });
        props.load(this.context.store, (mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod['default'] ? mod['default'] : mod,
            });
        });
    }

    render () {
        return this.state.mod ? this.props.children(this.state.mod) : <div></div>;
    }
}

export default Bundle;
