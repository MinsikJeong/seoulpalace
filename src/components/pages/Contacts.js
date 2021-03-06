import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Contacts extends Component {
  render(){
    return (
      <section className="my-5 py-5">

        <div className="container">

          <div className="well well-sm">
            <h3>
              <strong>Seoul Tour Address</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1wyDQvKO_ttXyHHeFAzh_X3sUZL0LFG8I"
                style={{
                  border:'0',
                  width:'100%',
                  height:'315px',
                  frameborder:'0'
                }}
                allowFullScreen
              />
            </div>
            <div className="col-md-5">
              <h4>
                <strong>연락 주세요!</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control"
                  placeholder="Name"/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control"
                  placeholder="Email"/>
                </div>
                <div className="form-group">
                  <input type="tel" className="form-control"
                  placeholder="Phone"/>
                </div>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  placeholder="SEND 버튼을 누르셔도 전송이 되진 않습니다"
                />
                <Link
                  className="btn btn-outline-primary text-uppercase mt-2"
                  to=''>
                  <i className="fa fa-paper-plane-o" aria-hidden="true" />
                  <i className="fab fa-telegram-plane"/>&nbsp;Send
                </Link>
              </form>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Contacts;
