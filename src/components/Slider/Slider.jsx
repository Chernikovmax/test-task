import React, {Component} from 'react';
import { LeftArrow, RightArrow } from '../icons';
import './Slider.css';

const PAGE_SIZE = 4;

export class Slider extends Component {
    state = {
        page: 0,
        total: 0,
    };

    static getDerivedStateFromProps(nextProps) {
        const {items} = nextProps;
        return {total: Math.ceil(items.length / PAGE_SIZE)};
    }

    renderPage() {
        const {page} = this.state;
        const {items} = this.props;
        return items.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
    }

    handleNextPage = () => {
        const {page, total} = this.state
        if (page + 1 <  total) {
            this.setState({page: page + 1});
        } else {
            this.setState({page: 0});
        }
    }

    handlePrevPage = () => {
        const { page, total } = this.state
        if (page - 1 >= 0) {
            this.setState({ page: page - 1 });
        } else {
            this.setState({ page: total-1 });
        }
    }

    render() {
        return (
            <div className="slider-wrapper">
                <button onClick={this.handlePrevPage} className="slider-switch-btn">
                    <LeftArrow/>
                </button>
                <div className="slides-wrapper">
                    {this.renderPage()}
                </div>
                <button onClick={this.handleNextPage} className="slider-switch-btn">
                    <RightArrow/>
                </button>
            </div>
        );
    }
}