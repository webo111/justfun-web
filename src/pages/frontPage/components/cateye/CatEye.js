import React from 'react';
import '../../style/catEye.css';

var _P = document.querySelector('#m path'),
    NF = 30;

var ends = void 0,
    pts = void 0,
    curr = void 0,
    dir = 1,
    rID = null,
    cf = 0,
    m = void 0;

export default class CatEye extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        pts = this.getAbsData(_P);

        ends = [].concat(this._toConsumableArray(pts)).slice(1).map(function (c) {
            return c.slice(0, -1);
        }).map(function (c, i) {
            return i % 2 ? c.reverse() : c;
        });
        curr = ends[1];

        this.update();
    }
    _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        } else {
            return Array.from(arr);
        }
    }
    getAbsData(el) {
        var d = el.getAttribute('d').split('M').slice(1)[0].split('c').map(function (c) {
            return c.split(' ').map(function (c) {
                return +c;
            });
        }).map(function (b) {
            return b.reduce(function (a, c, i) {
                return i % 2 ? a.concat([[b[i - 1], c]]) : a;
            }, []);
        });

        var _loop = function _loop(i) {
            var lastPrev = d[i - 1].slice(-1)[0];

            d[i] = d[i].map(function (c) {
                return c.map(function (k, j) {
                    return lastPrev[j] + k;
                });
            });
        };

        for (var i = 1; i < d.length; i++) {
            _loop(i);
        }

        return d;
    }
    stopAni() {
        this.cancelAnimationFrame(rID);
        rID = null;
    }
    tfn(k) {
        return Math.pow(.5 * (Math.sin((k - .5) * Math.PI) + 1), 3);
    }
    update() {
        cf += dir;

        var k = this.tfn(cf / NF);

        curr = ends[0].map(function (c, i) {
            return c.map(function (c, j) {
                return Math.round(k * c + (1 - k) * ends[1][i][j]);
            });
        }).reverse();

        _P.setAttribute('d', 'M' + pts[0][0] + '\n\t\t C' + [[].concat(this._toConsumableArray(ends[0]), [pts[1][2]]), [].concat(this._toConsumableArray(curr), [pts[0][0]])]);

        if (!(cf % NF)) {
            dir *= -1;
        }

        rID = this.requestAnimationFrame(this.update);
    }
    render() {
        return(
            <div id="CatEye">
                <svg viewBox="-2000 -1000 4000 2000">
                    <radialGradient id="r">
                        <stop stop-color="#ff0" offset=".32"></stop>
                        <stop stop-color="#fa0" offset=".83"></stop>
                        <stop stop-color="#fa0" offset=".91"></stop>
                        <stop stop-color="#000" offset=".95"></stop>
                    </radialGradient>
                    <filter id="f">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8"></feGaussianBlur>
                    </filter>
                    <mask id="m">
                        <path d="M500 170c200 340 820 340 780 -290c-200 0 -600 -60 -780 290" filter="url(#f)"></path>
                    </mask>
                    <g id="g" mask="url(#m)" filter="url(#f)">
                        <rect width="2000" height="2000"></rect>
                        <ellipse cx="930" cy="-70" rx="420" ry="500" fill="url(#r)"></ellipse>
                        <ellipse cx="950" cy="-20" rx="200" ry="260" transform="rotate(-9 950 -20)"></ellipse>
                        <circle cx="860" cy="-20" r="14"></circle>
                    </g>
                    <use href="#g" transform="scale(-1, 1)"></use>
                </svg>
            </div>
        );
    }
}