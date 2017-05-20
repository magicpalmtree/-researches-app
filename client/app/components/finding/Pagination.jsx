import React from 'react'
import ReactPaginate from 'react-paginate';


export default class Pagination extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ReactPaginate
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                pageCount={this.props.pageCount}
                previousLabel={"previous"}
                nextLabel={"next"}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                breakLabel={<a href="">...</a>}
                breakClassName={"break-me"}
            />
        )
    }
}