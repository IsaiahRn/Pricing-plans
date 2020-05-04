import React from 'react';
import './App.css';

function App() {
  return (
    <section className="section">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading">
                        Choose a plan
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">
                                        Bronze Plan
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum lorem</li>
                                        <li>lorem ipsum lorem</li>
                                        <li>lorem ipsum loremmm</li>
                                        <li>lorem ipsum lorem</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$297</p>
                                    </div>
                                    <a href="#" className="btn btn--white">Subscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">
                                        Silver Plan
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>lorem ipsum lorem</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsumm</li>
                                        <li>lorem ipsum loremm lorem</li>
                                        <li>lorem ipsum lorem</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$497</p>
                                    </div>
                                    <a href="#" className="btn btn--white">Subscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">
                                        Gold Plan
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>lorem ipsum lor</li>
                                        <li>lorem ipsum lorem</li>
                                        <li>ipsum lorem</li>
                                        <li>lorem ipsum loremmm</li>
                                        <li>lorem ipsum lorem</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$697</p>
                                    </div>
                                    <a href="#" className="btn btn--white">Subscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </section>
  );
}

export default App;
