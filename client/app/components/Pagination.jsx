import React, { PropTypes } from 'react';
import _ from 'underscore';

const propTypes = {
    items: PropTypes.array.isRequired,
    onPageChange: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
};

const defaultProps = {
    initialPage: 1
};

/**
 * Reusable component for pagination
 */
class Pagination extends React.Component {
    /**
     * Init props and set state
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    /**
     * Set page if items array isn't empty
     */
    componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    /**
     * Reset page if items array has changed
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    /**
     * Set a single page
     * @param page - Page which need to be set
     * @param restrict - Parameter, which prevents from setting the wrong page
     */
    setPage(page, restrict=false) {
        let items = this.props.items;
        let pager = this.state.pager;

        if (restrict) {
            if (page > pager.totalPages) {
                return;
            }
        }

        /**
         * Get new pager object for specified page
         * @type {{totalItems, currentPage, pageSize, totalPages, startPage, endPage, startIndex, endIndex, pages}|*}
         */
        pager = this.getPager(items.length, page, this.props.pageSize);

        /**
         * Get new page of items from items array
         */
        let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        /**
         * Update state
         */
        this.setState({ pager: pager });

        /**
         * Call change page function in parent component
         */
        this.props.onPageChange(pageOfItems);
    }

    /**
     * Build and returns pager object
     * @param totalItems
     * @param currentPage
     * @param pageSize
     * @returns {{totalItems: *, currentPage: (*|number), pageSize: (*|number), totalPages: number, startPage: *, endPage: *, startIndex: number, endIndex: number, pages}}
     */
    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    /**
     * Render method
     * @returns {*}
     */
    render() {
        let pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (
            <ul className="pagination">
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(1)}>First</a>
                </li>
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage - 1, true)}>Previous</a>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <a onClick={() => this.setPage(page)}>{page}</a>
                    </li>
                )}
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage + 1, true)}>Next</a>
                </li>
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
                </li>
            </ul>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
