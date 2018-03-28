<template>
  <div class="cm_main2">
    <div class="cm_pc_12 cm_h001">
        <div class="cm_pc_12 cm_h001">
              <ul class="cm_pc_12 cm_h001">
                  <li class="cm_pc_3 cm_mob_12 cm_h001 cm_b02" id="leftBlock">
                     <ul class="cm_pc_12 cm_lh105 cm_h002">
                         <h2 class="cm_pc_12 cm_hl3 cm_b01 cm_cf cm_ti05">ORDER BOOK</h2>
                         <li class="cm_pc_12 cm_hl3 cm_bb1c02 cm_c02 cm_tc">
                           <div class="cm_pc_5">Market size</div>
                           <div class="cm_pc_4">Price (USD)</div>
                           <div class="cm_pc_3">My Size</div>
                         </li>
                         <li class="cm_pc_12 cm_c02 cm_tc" :class="{'cm_pt05':k==0,'cm_pb05':k==bookData.length-1}" v-for="(v,k) in bookData" v-bind:key="k">
                           <div class="cm_pc_5" v-if="v.mIsup==0"><span class="cm_c02">{{v.marketSize|fgDian}}.</span><span class="cm_cf">{{v.marketSize|fgDian2}}</span></div>
                           <div class="cm_pc_5" v-if="v.mIsup==1"><span class="cm_c04">{{v.marketSize|fgDian}}.</span><span class="cm_c04">{{v.marketSize|fgDian2}}</span></div>
                           <div class="cm_pc_4"><span class="cm_c03">{{v.price|fgDian}}.</span><span class="cm_c04">{{v.price|fgDian3}}</span></div>
                           <div class="cm_pc_3" :class="{'cm_c04':v.mIsup==1}">{{v.mySize}}</div>
                         </li>
                     </ul>
                     <ul class="cm_pc_12 cm_lh105 cm_h002">
                         <li class="cm_pc_12 cm_hl205 cm_bb2c02 cm_bt2c02 cm_c02">
                           <div class="cm_pc_5 cm_ti05">USD SPREAD</div>
                           <div class="cm_pc_4 cm_tc">0.01</div>
                         </li>
                         <li class="cm_pc_12 cm_c02 cm_tc" :class="{'cm_pt05':k==0,'cm_pb05 cm_mob_mb3':k==bookData2.length-1}" v-for="(v,k) in bookData2" v-bind:key="k">
                           <div class="cm_pc_5" v-if="v.mIsup==0"><span class="cm_c06">{{v.marketSize|fgDian}}.</span><span class="cm_c06">{{v.marketSize|fgDian2}}</span></div>
                           <div class="cm_pc_5" v-if="v.mIsup==1"><span class="cm_c02">{{v.marketSize|fgDian}}.</span><span class="cm_cf">{{v.marketSize|fgDian2}}</span></div>
                           <div class="cm_pc_4"><span class="cm_c05">{{v.price|fgDian}}.</span><span class="cm_c06">{{v.price|fgDian3}}</span></div>
                           <div class="cm_pc_3">{{v.mySize}}</div>
                         </li>
                         <li class="cm_pa cm_bl0 cm_z2 cm_w100 cm_b02">
                           <div class="cm_pc_12 cm_hl3 cm_bt2c02 cm_c02">
                            <div class="cm_pc_5 cm_ti05">AGGREGATION</div>
                            <div class="cm_pc_4 cm_tc">0.05</div>
                            <div class="cm_pc_3 cm_tc">
                                <div class="cm_pc_6">
                                    <div class="cm_fc4">
                                      <span class="cm_img03 cm_wh2 cm_bs100 cm_mtb05 cm_br105"></span>
                                    </div>
                                </div>
                                <div class="cm_pc_6">
                                    <div class="cm_fc4">
                                      <span class="cm_img04 cm_wh2 cm_bs100 cm_mtb05 cm_br105"></span>
                                    </div>
                                </div>
                            </div>
                          </div>
                         </li>
                     </ul>
                  </li>
                  <li class="cm_pc_6 cm_mob_12 cm_h001 cm_b02 cm_bl1c01 cm_br1c01" id="centerBlock">
                     <ul class="cm_pc_12 cm_h001">
                        <li class="cm_pc_12 cm_h002">
                          <div class="cm_pc_12">
                              <h2 class="cm_pc_12 cm_hl3 cm_b01 cm_cf cm_ti05">PRICE CHART</h2>
                              <ul class="cm_pa cm_tr0 cm_z2 cm_mr05 cm_mt05">
                                <li class="cm_fl cm_hl2 cm_bb1cf cm_cf">Price chart</li>
                                <li class="cm_fl cm_hl2 cm_pl1 cm_c01 cm_bb1c02">Depth chart</li>
                              </ul>
                          </div>
                          <div class="cm_pc_12 cm_lh3 cm_bb1c02 cm_c02 cm_tc">
                            <ul class="cm_pc_5 cm_mob_12">
                                <li class="cm_pc_3" v-for="(v2,k2) in priceButton" v-bind:key="k2">
                                  <div class="cm_fc4">
                                    <div class="cm_fl">{{v2.name}}</div>
                                    <span class="cm_fl cm_wh1 cm_bs100 cm_mtb1 cm_br05" :class="{'cm_img05':k2!=priceButton.length-1,'cm_img06':k2==priceButton.length-1}"></span>
                                  </div>
                                </li>
                            </ul>
                            <ul class="cm_pc_7 cm_mob_12">
                                <li class="cm_pc_5f" v-for="(v2,k2) in priceData2" v-bind:key="k2">
                                  <div class="cm_fc4">
                                    <div class="cm_fl">{{v2.name}}:</div>
                                    <span class="cm_fl">{{v2.num}}</span>
                                  </div>
                                </li>
                            </ul>
                          </div>
                          <div class="cm_pc_12 cm_h23 cm_mt05  cm_bf" id="bdEchart"></div>
                        </li>
                        <li class="cm_pc_12 cm_b04 cm_h002">
                            <div class="cm_pc_12 cm_bb1c01">
                                <h2 class="cm_pc_12 cm_hl4 cm_b03 cm_c01 cm_ti05">OPEN ORDERS</h2>
                                <ul class="cm_pa cm_tr0 cm_z2 cm_mr05 cm_mt1">
                                  <li class="cm_fl cm_hl2 cm_bb1cf cm_c01">Orders</li>
                                  <li class="cm_fl cm_hl2 cm_pl1 cm_c07 cm_bb1c02">Files</li>
                                </ul>
                            </div>
                            <ul class="cm_pc_12 cm_tc cm_c08">
                                <li class="cm_pc_3 cm_mob_4 cm_hl3 cm_bb1c03">Size</li>
                                <li class="cm_pc_2 cm_mob_4 cm_hl3 cm_bb1c03">Filled(BTC)</li>
                                <li class="cm_pc_2 cm_mob_4 cm_hl3 cm_bb1c03">Price(USD)</li>
                                <li class="cm_pc_2 cm_mob_4 cm_hl3 cm_bb1c03">Fee(USD)</li>
                                <li class="cm_pc_2 cm_mob_4 cm_hl3 cm_bb1c03">Time</li>
                                <li class="cm_pc_1 cm_mob_4 cm_hl3 cm_bb1c03">Status</li>
                            </ul>
                            <ul class="cm_pc_12 cm_tc cm_c09">
                                <li class="cm_fc4 cm_mtb3">You have no BTC/USD orders</li>
                            </ul>
                        </li>
                     </ul>
                     
                  </li>
                  <li class="cm_pc_3 cm_mob_12 cm_h001 cm_b02" id="rightBlock">
                      <h2 class="cm_pc_12 cm_hl3 cm_b01 cm_cf cm_ti05">TRADE HISTORY</h2>
                      <div class="cm_pc_12 cm_hl3 cm_bb1c02 cm_c02 cm_tc">
                           <div class="cm_pc_5">Trade size</div>
                           <div class="cm_pc_4">Price (USD)</div>
                           <div class="cm_pc_3">Time</div>
                         </div>
                      <ul class="cm_pc_12 cm_lh105 cm_oys" id="ggh001">
                         <li class="cm_pc_12 cm_c02 cm_tc" :class="{'cm_pt05':k==0,'cm_pb05':k==tradeData.length-1}" v-for="(v,k) in tradeData" v-bind:key="k">
                           <div class="cm_pc_5"><span class="cm_c02">{{v.marketSize|fgDian}}.</span><span class="cm_cf">{{v.marketSize|fgDian2}}</span></div>
                           <div class="cm_pc_4" v-if="v.pIsup==0"><span class="cm_c03">{{v.price|fgDian}}.</span><span class="cm_c04">{{v.price|fgDian3}}</span><span class="cm_fr cm_mt02 cm_img01 cm_wh1 cm_bs100"></span></div>
                           <div class="cm_pc_4" v-if="v.pIsup==1"><span class="cm_c05">{{v.price|fgDian}}.</span><span class="cm_c06">{{v.price|fgDian3}}</span><span class="cm_fr cm_mt02 cm_img02 cm_wh1 cm_bs100"></span></div>
                           <div class="cm_pc_3">{{v.mySize}}</div>
                         </li>
                     </ul>
                  </li>
              </ul>
          </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      title: thisPage.title,
      bookData: [
        {
          marketSize: 0.00123456,
          mIsup: 0,
          price: 12345.61,
          pIsup: 0,
          mySize: "-"
        },
        { marketSize: 0.12, mIsup: 0, price: 12345.62, pIsup: 0, mySize: "-" },
        { marketSize: 2.0, mIsup: 0, price: 12345.6, pIsup: 0, mySize: "-" },
        { marketSize: 2.0, mIsup: 0, price: 12345.6, pIsup: 0, mySize: "-" },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 0,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 0,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 0,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 0,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 0,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 0,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 0,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 0,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 0,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
      ],
      bookData2: [
        {
          marketSize: 0.00123456,
          mIsup: 0,
          price: 12345.61,
          pIsup: 0,
          mySize: "-"
        },
        { marketSize: 0.12, mIsup: 0, price: 12345.62, pIsup: 0, mySize: "-" },
        { marketSize: 2.0, mIsup: 0, price: 12345.6, pIsup: 0, mySize: "-" },
        { marketSize: 2.0, mIsup: 0, price: 12345.6, pIsup: 0, mySize: "-" },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },

        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        }
      ],
      tradeData: [
        {
          marketSize: 0.00123456,
          mIsup: 0,
          price: 12345.61,
          pIsup: 1,
          mySize: "-"
        },
        { marketSize: 0.12, mIsup: 0, price: 12345.62, pIsup: 1, mySize: "-" },
        { marketSize: 2.0, mIsup: 0, price: 12345.6, pIsup: 1, mySize: "-" },
        { marketSize: 2.0, mIsup: 0, price: 12345.6, pIsup: 1, mySize: "-" },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 1,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 1,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 1,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 1,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 1,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 1,
          mySize: "-"
        },

        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 1,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 1,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 1,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 0.00123456,
          mIsup: 0,
          price: 12345.61,
          pIsup: 1,
          mySize: "-"
        },
        { marketSize: 0.12, mIsup: 0, price: 12345.62, pIsup: 0, mySize: "-" },
        { marketSize: 2.0, mIsup: 0, price: 12345.6, pIsup: 0, mySize: "-" },
        { marketSize: 2.0, mIsup: 0, price: 12345.6, pIsup: 0, mySize: "-" },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 1,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },

        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        },
        {
          marketSize: 5.12345678,
          mIsup: 1,
          price: 12345.6,
          pIsup: 0,
          mySize: "-"
        }
      ],
      priceButton: [
        { name: "Candle" },
        { name: "1d" },
        { name: "Overlay" },
        { name: "AM" }
      ],
      priceData2: [
        { name: "O", num: "11111.11" },
        { name: "H", num: "11111.11" },
        { name: "L", num: "11111.11" },
        { name: "C", num: "11111.11" },
        { name: "V", num: "111" }
      ]
    };
  },
  methods: {
    drawLine() {
      let bdEchart = this.$echarts.init(document.getElementById("bdEchart"));

      var upColor = "#ec0000";
      var upBorderColor = "#8A0000";
      var downColor = "#00da3c";
      var downBorderColor = "#008F28";

      var data0 = splitData([
        ["2013/1/24", 2320.26, 2320.26, 2287.3, 2362.94],
        ["2013/1/25", 2300, 2291.3, 2288.26, 2308.38],
        ["2013/1/28", 2295.35, 2346.5, 2295.35, 2346.92],
        ["2013/1/29", 2347.22, 2358.98, 2337.35, 2363.8],
        ["2013/1/30", 2360.75, 2382.48, 2347.89, 2383.76],
        ["2013/1/31", 2383.43, 2385.42, 2371.23, 2391.82],
        ["2013/2/1", 2377.41, 2419.02, 2369.57, 2421.15],
        ["2013/2/4", 2425.92, 2428.15, 2417.58, 2440.38],
        ["2013/2/5", 2411, 2433.13, 2403.3, 2437.42],
        ["2013/2/6", 2432.68, 2434.48, 2427.7, 2441.73],
        ["2013/2/7", 2430.69, 2418.53, 2394.22, 2433.89],
        ["2013/2/8", 2416.62, 2432.4, 2414.4, 2443.03],
        ["2013/2/18", 2441.91, 2421.56, 2415.43, 2444.8],
        ["2013/2/19", 2420.26, 2382.91, 2373.53, 2427.07],
        ["2013/2/20", 2383.49, 2397.18, 2370.61, 2397.94],
        ["2013/2/21", 2378.82, 2325.95, 2309.17, 2378.82],
        ["2013/2/22", 2322.94, 2314.16, 2308.76, 2330.88],
        ["2013/2/25", 2320.62, 2325.82, 2315.01, 2338.78],
        ["2013/2/26", 2313.74, 2293.34, 2289.89, 2340.71],
        ["2013/2/27", 2297.77, 2313.22, 2292.03, 2324.63],
        ["2013/2/28", 2322.32, 2365.59, 2308.92, 2366.16],
        ["2013/3/1", 2364.54, 2359.51, 2330.86, 2369.65],
        ["2013/3/4", 2332.08, 2273.4, 2259.25, 2333.54],
        ["2013/3/5", 2274.81, 2326.31, 2270.1, 2328.14],
        ["2013/3/6", 2333.61, 2347.18, 2321.6, 2351.44],
        ["2013/3/7", 2340.44, 2324.29, 2304.27, 2352.02],
        ["2013/3/8", 2326.42, 2318.61, 2314.59, 2333.67],
        ["2013/3/11", 2314.68, 2310.59, 2296.58, 2320.96],
        ["2013/3/12", 2309.16, 2286.6, 2264.83, 2333.29],
        ["2013/3/13", 2282.17, 2263.97, 2253.25, 2286.33],
        ["2013/3/14", 2255.77, 2270.28, 2253.31, 2276.22],
        ["2013/3/15", 2269.31, 2278.4, 2250, 2312.08],
        ["2013/3/18", 2267.29, 2240.02, 2239.21, 2276.05],
        ["2013/3/19", 2244.26, 2257.43, 2232.02, 2261.31],
        ["2013/3/20", 2257.74, 2317.37, 2257.42, 2317.86],
        ["2013/3/21", 2318.21, 2324.24, 2311.6, 2330.81],
        ["2013/3/22", 2321.4, 2328.28, 2314.97, 2332],
        ["2013/3/25", 2334.74, 2326.72, 2319.91, 2344.89],
        ["2013/3/26", 2318.58, 2297.67, 2281.12, 2319.99],
        ["2013/3/27", 2299.38, 2301.26, 2289, 2323.48],
        ["2013/3/28", 2273.55, 2236.3, 2232.91, 2273.55],
        ["2013/3/29", 2238.49, 2236.62, 2228.81, 2246.87]
      ]);

      function splitData(rawData) {
        var categoryData = [];
        var values = [];
        for (var i = 0; i < rawData.length; i++) {
          categoryData.push(rawData[i].splice(0, 1)[0]);
          values.push(rawData[i]);
        }
        return {
          categoryData: categoryData,
          values: values
        };
      }

      function calculateMA(dayCount) {
        var result = [];
        for (var i = 0, len = data0.values.length; i < len; i++) {
          if (i < dayCount) {
            result.push("-");
            continue;
          }
          var sum = 0;
          for (var j = 0; j < dayCount; j++) {
            sum += data0.values[i - j][1];
          }
          result.push(sum / dayCount);
        }
        return result;
      }

      var option = {
        title: {
          text: "",
          left: 0
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        legend: {
          data: ["日K", "MA5", "MA10", "MA20", "MA30"]
        },
        grid: {
          left: "10%",
          right: "10%",
          bottom: "15%"
        },
        xAxis: {
          type: "category",
          data: data0.categoryData,
          scale: true,
          boundaryGap: false,
          axisLine: { onZero: false },
          splitLine: { show: false },
          splitNumber: 20,
          min: "dataMin",
          max: "dataMax"
        },
        yAxis: {
          scale: true,
          splitArea: {
            show: true
          }
        },
        dataZoom: [
          {
            type: "inside",
            start: 50,
            end: 100
          },
          {
            show: true,
            type: "slider",
            y: "90%",
            start: 50,
            end: 100
          }
        ],
        series: [
          {
            name: "日K",
            type: "candlestick",
            data: data0.values,
            itemStyle: {
              normal: {
                color: upColor,
                color0: downColor,
                borderColor: upBorderColor,
                borderColor0: downBorderColor
              }
            },
            markPoint: {
              label: {
                normal: {
                  formatter: function(param) {
                    return param != null ? Math.round(param.value) : "";
                  }
                }
              },
              data: [
                {
                  name: "XX标点",
                  coord: ["2013/5/31", 2300],
                  value: 2300,
                  itemStyle: {
                    normal: { color: "rgb(41,60,85)" }
                  }
                },
                {
                  name: "highest value",
                  type: "max",
                  valueDim: "highest"
                },
                {
                  name: "lowest value",
                  type: "min",
                  valueDim: "lowest"
                },
                {
                  name: "average value on close",
                  type: "average",
                  valueDim: "close"
                }
              ],
              tooltip: {
                formatter: function(param) {
                  return param.name + "<br>" + (param.data.coord || "");
                }
              }
            },
            markLine: {
              symbol: ["none", "none"],
              data: [
                [
                  {
                    name: "from lowest to highest",
                    type: "min",
                    valueDim: "lowest",
                    symbol: "circle",
                    symbolSize: 10,
                    label: {
                      normal: { show: false },
                      emphasis: { show: false }
                    }
                  },
                  {
                    type: "max",
                    valueDim: "highest",
                    symbol: "circle",
                    symbolSize: 10,
                    label: {
                      normal: { show: false },
                      emphasis: { show: false }
                    }
                  }
                ],
                {
                  name: "min line on close",
                  type: "min",
                  valueDim: "close"
                },
                {
                  name: "max line on close",
                  type: "max",
                  valueDim: "close"
                }
              ]
            }
          },
          {
            name: "MA5",
            type: "line",
            data: calculateMA(5),
            smooth: true,
            lineStyle: {
              normal: { opacity: 0.5 }
            }
          },
          {
            name: "MA10",
            type: "line",
            data: calculateMA(10),
            smooth: true,
            lineStyle: {
              normal: { opacity: 0.5 }
            }
          },
          {
            name: "MA20",
            type: "line",
            data: calculateMA(20),
            smooth: true,
            lineStyle: {
              normal: { opacity: 0.5 }
            }
          },
          {
            name: "MA30",
            type: "line",
            data: calculateMA(30),
            smooth: true,
            lineStyle: {
              normal: { opacity: 0.5 }
            }
          }
        ]
      };
      bdEchart.setOption(option);
    },
    ...mapActions(["pushToBaidu"])
  },
  computed: {},
  mounted() {
    var t = this;
    t.pushToBaidu();
    t.drawLine();
    cm.setH('#ggh001', 6);
  },
  components: {},
  activated: function() {},
  deactivated: function() {}
};
</script>
<style>
@import "../../assets/css/apps/echarts.css";
</style>