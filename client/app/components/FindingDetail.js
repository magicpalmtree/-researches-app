const React = require('react');

module.exports = React.createClass({
   render: function(){
       return (
           <div>
               <div><span className="label-detail">vyzkum:</span> {this.props.finding.vyzkum}</div>
               <div><span className="label-detail">objekt:</span> {this.props.finding.objekt}</div>
               <div><span className="label-detail">cislo:</span> {this.props.finding.cislo}</div>
               <div><span className="label-detail">PCODE:</span> {this.props.finding.PCODE}</div>
               <div><span className="label-detail">frakce:</span> {this.props.finding.frakce}</div>
               <div><span className="label-detail">makrozbTyp:</span> {this.props.finding.makrozbTyp}</div>
               <div><span className="label-detail">rPocet:</span> {this.props.finding.rPocet}</div>
               <div><span className="label-detail">odhad:</span> {this.props.finding.odhad}</div>
               <div><span className="label-detail">nasobitel:</span> {this.props.finding.nasobitel}</div>
               <div><span className="label-detail">FPocet:</span> {this.props.finding.FPocet}</div>
               <div><span className="label-detail">datVloz:</span> {this.props.finding.datVloz}</div>
               <div><span className="label-detail">poznFrakce:</span> {this.props.finding.poznFrakce}</div>
               <div><span className="label-detail">taxon:</span> {this.props.finding.taxon}</div>
           </div>
       )
   }
});
