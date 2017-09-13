Vue.filter('currency', function (value, currency = '$', decimals = 2) {
        value = parseFloat(value)
        if (!isFinite(value) || (!value && value !== 0)) return ''
        var stringified = Math.abs(value).toFixed(decimals)
        var _int = stringified.slice(0, -1 - decimals)
        var i = _int.length % 3
        var head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ' ' : '')) : ''
        var _float = stringified.slice(-1 - decimals)
        var sign = value < 0 ? '-' : ''
        return sign + currency + head + _int.slice(i) + _float
});