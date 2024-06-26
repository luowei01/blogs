var moment = require('moment');
module.exports = {
  book: {
    assets: './assets',
    css: [
      'footer.css'
    ],
  },
  hooks: {
    'page:before': function (page) {
      var _label = 'File Modify: ',
        _format = 'YYYY-MM-DD HH:mm:ss',
        _copy = 'powered by <a href="https://chateda.top/" target="_blank">luowei</a>'
      if (this.options.pluginsConfig['tbfed-pagefooter']) {
        _label = this.options.pluginsConfig['tbfed-pagefooter']['modify_label'] || _label;
        _format = this.options.pluginsConfig['tbfed-pagefooter']['modify_format'] || _format;

        var _c = this.options.pluginsConfig['tbfed-pagefooter']['copyright'];
        _copy = _c ? _c + ' all right reserved,' + _copy : _copy;
      }
      var _copy = '<span class="copyright">' + _copy + '</span>'
      var notice = '<b>​版权声明</b>:<span style="color:red;">本文为博主原创文章，未经博主允许不得转载、摘编、复制及建立镜像，如有版权问题，请联系博主! </span>'
      var str = '\n\n<footer class="page-footer">' + notice + '<br>' + _copy +
        '<span class="footer-modification">' +
        _label +
        '\n{{file.mtime | date("' + _format +
        '")}}\n</span></footer>'
      page.content = page.content + str;
      return page;
    }
  },
  filters: {
    date: function (d, format) {
      return moment(d).format(format)
    }
  }
};
