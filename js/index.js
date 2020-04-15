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
    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
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
        yAxis: [
            {
                type: 'category',
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                // 是否是反向坐标
                inverse:true,
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
            {
                show: true,
                data: [702, 350, 610, 793, 664],
                inverse:true, 
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: "#fff"
                }
                }
            }
        ],
        series: [
            {
                
                name: '条',
                type: 'bar',
                // 使用y轴的index，在单个图表实例中存在多个y轴的时候有用
                yAxisIndex:0,
                data: [70, 34, 60, 78, 69],
                // 修改第一组柱子的圆角
                itemStyle:{
                    barBorderRadius:20,
                    // 此时的color，可以修改柱子的颜色
                    color:function (params) {
                        // params 是当前柱子对象 dataIndex是柱子的索引号
                        // console.log(params);
                        return myColor[params.dataIndex]
                    }
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
                },
            },
            {
                name: '框',
                type: 'bar',
                yAxisIndex:1,
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle:{
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100]
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