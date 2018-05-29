!function(t){var n={};function e(g){if(n[g])return n[g].exports;var I=n[g]={i:g,l:!1,exports:{}};return t[g].call(I.exports,I,I.exports,e),I.l=!0,I.exports}e.m=t,e.c=n,e.d=function(t,n,g){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:g})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AutogrowTextarea\", function() { return AutogrowTextarea; });\nvar AutogrowTextarea = /** @class */ (function () {\n    function AutogrowTextarea(el, options) {\n        if (options === void 0) { options = {}; }\n        this.el = el;\n        var attrs = this.parseAttrs();\n        this.minRows = el.rows;\n        this.maxRows = options.maxRows || attrs.maxRows || Infinity;\n        this.handleFocus = this.handleFocus.bind(this);\n        this.handleChange = this.handleChange.bind(this);\n        this.bindEvents();\n    }\n    AutogrowTextarea.prototype.parseAttrs = function () {\n        var maxRows = Number(this.el.getAttribute('data-autogrow')), convert = function (prop) { return isNaN(prop) ? 0 : prop; };\n        return {\n            maxRows: convert(maxRows)\n        };\n    };\n    AutogrowTextarea.prototype.bindEvents = function () {\n        this.el.addEventListener('focus', this.handleFocus, false);\n        this.el.addEventListener('input', this.handleChange, false);\n    };\n    AutogrowTextarea.prototype.handleFocus = function () {\n        if (!this.baseScrollHeight) {\n            var _a = this.el, value = _a.value, rows = _a.rows;\n            this.el.value = '';\n            this.baseScrollHeight = this.el.scrollHeight;\n            this.el.rows = this.el.rows + 1;\n            this.lineHeight = this.el.scrollHeight - this.baseScrollHeight;\n            this.el.rows = rows;\n            this.el.value = value;\n        }\n    };\n    AutogrowTextarea.prototype.handleChange = function () {\n        this.el.rows = this.minRows;\n        var textRows = Math.ceil((this.el.scrollHeight - this.baseScrollHeight) / this.lineHeight);\n        this.el.rows = Math.min(this.minRows + textRows, this.maxRows);\n    };\n    AutogrowTextarea.prototype.destroy = function () {\n        this.el.removeEventListener('focus', this.handleFocus);\n        this.el.removeEventListener('input', this.handleChange);\n        this.el.rows = null;\n    };\n    return AutogrowTextarea;\n}());\n\n;\ndocument.addEventListener('DOMContentLoaded', function () {\n    var inputs = document.querySelectorAll('textarea[data-autogrow]');\n    [].forEach.call(inputs, function (input) { return new AutogrowTextarea(input); });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9leHRlbnNpb24udHM/Y2MzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQXV0b2dyb3dUZXh0YXJlYSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBdXRvZ3Jvd1RleHRhcmVhKGVsLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdmFyIGF0dHJzID0gdGhpcy5wYXJzZUF0dHJzKCk7XG4gICAgICAgIHRoaXMubWluUm93cyA9IGVsLnJvd3M7XG4gICAgICAgIHRoaXMubWF4Um93cyA9IG9wdGlvbnMubWF4Um93cyB8fCBhdHRycy5tYXhSb3dzIHx8IEluZmluaXR5O1xuICAgICAgICB0aGlzLmhhbmRsZUZvY3VzID0gdGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cbiAgICBBdXRvZ3Jvd1RleHRhcmVhLnByb3RvdHlwZS5wYXJzZUF0dHJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWF4Um93cyA9IE51bWJlcih0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hdXRvZ3JvdycpKSwgY29udmVydCA9IGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBpc05hTihwcm9wKSA/IDAgOiBwcm9wOyB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWF4Um93czogY29udmVydChtYXhSb3dzKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgQXV0b2dyb3dUZXh0YXJlYS5wcm90b3R5cGUuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuaGFuZGxlRm9jdXMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuaGFuZGxlQ2hhbmdlLCBmYWxzZSk7XG4gICAgfTtcbiAgICBBdXRvZ3Jvd1RleHRhcmVhLnByb3RvdHlwZS5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhc2VTY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZWwsIHZhbHVlID0gX2EudmFsdWUsIHJvd3MgPSBfYS5yb3dzO1xuICAgICAgICAgICAgdGhpcy5lbC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5iYXNlU2Nyb2xsSGVpZ2h0ID0gdGhpcy5lbC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmVsLnJvd3MgPSB0aGlzLmVsLnJvd3MgKyAxO1xuICAgICAgICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gdGhpcy5lbC5zY3JvbGxIZWlnaHQgLSB0aGlzLmJhc2VTY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmVsLnJvd3MgPSByb3dzO1xuICAgICAgICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBdXRvZ3Jvd1RleHRhcmVhLnByb3RvdHlwZS5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwucm93cyA9IHRoaXMubWluUm93cztcbiAgICAgICAgdmFyIHRleHRSb3dzID0gTWF0aC5jZWlsKCh0aGlzLmVsLnNjcm9sbEhlaWdodCAtIHRoaXMuYmFzZVNjcm9sbEhlaWdodCkgLyB0aGlzLmxpbmVIZWlnaHQpO1xuICAgICAgICB0aGlzLmVsLnJvd3MgPSBNYXRoLm1pbih0aGlzLm1pblJvd3MgKyB0ZXh0Um93cywgdGhpcy5tYXhSb3dzKTtcbiAgICB9O1xuICAgIEF1dG9ncm93VGV4dGFyZWEucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmhhbmRsZUZvY3VzKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgdGhpcy5lbC5yb3dzID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBBdXRvZ3Jvd1RleHRhcmVhO1xufSgpKTtcbmV4cG9ydCB7IEF1dG9ncm93VGV4dGFyZWEgfTtcbjtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhW2RhdGEtYXV0b2dyb3ddJyk7XG4gICAgW10uZm9yRWFjaC5jYWxsKGlucHV0cywgZnVuY3Rpb24gKGlucHV0KSB7IHJldHVybiBuZXcgQXV0b2dyb3dUZXh0YXJlYShpbnB1dCk7IH0pO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);