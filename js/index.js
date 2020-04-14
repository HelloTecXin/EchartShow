// 柱状图模块1
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签 相关样式
                axisLabel:{
                    color:"rgba(255,255,255,.6)",
                    fontSize:"12"
                },
                // 不显示x坐标轴的样式
                axisLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                 // 修改刻度标签 相关样式
                 axisLabel:{
                    color:"rgba(255,255,255,.6)",
                    fontSize:"12"
                },
                // 不显示x坐标轴的样式
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)',
                        width:1,
                        type: "solid"
                    }
                },
                // y 轴分隔线样式
                splitLine: {
                    lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                // 修改柱子宽度
                barWidth: '35%',
                data:[200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5
                  }
            }
        ]
    };
    // 把配置项给实例对象
    myChart.setOption(option);
    // 让图表跟随屏幕自动去适应
    window.addEventListener('resize',function () {
        myChart.resize();
    })
})();
// 柱状图2
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    // 指定配置和数据
    var option = {
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%",
            // containLabel: true
        },
        xAxis: {
           show:false
        },
        yAxis: {
            type: 'category',
            data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
            //不显示y轴线条
            axisLine: {
                show: false
                    },
            // 不显示刻度
            axisTick: {
                show: false
            },
            // 刻度标签的文字设置为白色
            axisLabel: {
                color: "#fff"
         },
        },
        series: [
            {
                
                name: '条',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230],
                // 修改第一组柱子的圆角
                itemStyle:{
                    barBorderRadius:20
                },
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                label:{
                    //显示柱子内的文字
                    show:true,
                    position:'inside',
                    // {c} 会自动的解析为 数据 data里面的数据
                    formatter:"{c}%"
                }
            },
            {
                name: '2012年',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    };
    // 把配置给实例化对象
    myChart.setOption(option);
    // 让图表跟随屏幕自动去适应
    window.addEventListener('resize',function () {
        myChart.resize();
    })
})();