var seven_chart = echarts.init(document.getElementById("seven"));
var circleEcharts = echarts.init(document.getElementById("circleEcharts"))
var barEcharts = echarts.init(document.getElementById("barEcharts"))

var seven_option = {
  title: {
    // text: '未来一周气温变化',//感觉头部有点乱，没使用自带的标题
    // subtext: '纯属虚构'
    x: "left",
    align: "center"
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {
    data: ["人数"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  toolbox: {},
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [] // X轴的日期
  },
  yAxis: {
    name: "人",
    nameLocation: "end",
    type: "value",
    axisLabel: {
      formatter: "{value} "
    }
  },
  series: [
    {
      name: "人数",
      type: "line",
      data: [],
      lineStyle: {
        //设置折线色颜色
        color: "#3f89ec"
      },
      itemStyle: {
        //设置折线折点的颜色
        normal: {
          color: "#3f89ec"
        }
      }
    }
  ]
} // 曲线图配置

var option = {
  title: {
    text: '饼状图数据展示',
    subtext: '',
    x: 'center'
  },
  tooltip: {
    // trigger: 'item',
    // formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: []
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
} // 饼状图配置

var barOption = {
  title: {
    text: '柱状图数据展示',
    subtext: '',
    x: 'center'
  },
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: [],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '直接访问',
      type: 'bar',
      barWidth: '60%',
      data: []
    }
  ]
}; // 柱形图配置

seven_chart.setOption(seven_option)
circleEcharts.setOption(option)
barEcharts.setOption(barOption)
getMonthData() // 曲线图数据请求获取
getWeekData() // 柱形图数据请求获取

function getMonthData() {
  var ajax = new XMLHttpRequest();
  ajax.open('get', 'https://edu.telking.com/api/?type=month')
  ajax.send();
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      var data = JSON.parse(ajax.responseText).data
      seven_option.xAxis.data = data.xAxis
      seven_option.series[0].data = data.series
      seven_chart.setOption(seven_option) // 折线图获取数据以后重新配置
    }
  }
}

function getWeekData() {
  var ajax = new XMLHttpRequest();
  ajax.open('get', 'https://edu.telking.com/api/?type=week')
  ajax.send();
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      var data = JSON.parse(ajax.responseText).data
      console.log(data)
      for (let i = 0; i < data.series.length; i++) {
        option.series[0].data.push({
          value: data.series[i],
          name: data.xAxis[i]
        })
      }// 饼状图获取数据

      barOption.xAxis[0].data = data.xAxis
      barOption.series[0].data = data.series // 柱形图获取数据

      circleEcharts.setOption(option) // 饼状图获取数据以后重新配置
      barEcharts.setOption(barOption) // 柱形图获取数据以后重新配置
    }
  }
}