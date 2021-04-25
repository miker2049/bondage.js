/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parserNode = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,11],$V2=[1,12],$V3=[1,13],$V4=[5,8,21,22,24,26],$V5=[1,17],$V6=[1,18],$V7=[1,19],$V8=[1,33],$V9=[1,28],$Va=[1,23],$Vb=[1,24],$Vc=[1,25],$Vd=[1,26],$Ve=[1,27],$Vf=[1,29],$Vg=[1,30],$Vh=[1,31],$Vi=[1,41],$Vj=[1,42],$Vk=[1,43],$Vl=[1,44],$Vm=[1,45],$Vn=[1,46],$Vo=[1,47],$Vp=[1,48],$Vq=[1,49],$Vr=[1,50],$Vs=[1,51],$Vt=[1,52],$Vu=[1,53],$Vv=[11,46,47,48,49,50,51,52,53,54,55,56,57,58,59],$Vw=[1,88],$Vx=[1,86],$Vy=[1,87],$Vz=[11,46,47,48,51,52,53,54,55,56,57,58,59],$VA=[11,46,51,52,53,54,55,56,57,58,59],$VB=[46,62],$VC=[1,110],$VD=[1,111];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"node":3,"statements":4,"EndOfInput":5,"conditionalStatement":6,"statement":7,"BeginCommand":8,"If":9,"expression":10,"EndCommand":11,"EndIf":12,"additionalConditionalStatements":13,"Else":14,"ElseIf":15,"shortcut":16,"command":17,"jump":18,"link":19,"assignment":20,"Text":21,"ShortcutOption":22,"Indent":23,"Dedent":24,"CommandCall":25,"OptionStart":26,"OptionEnd":27,"OptionDelimit":28,"Identifier":29,"Set":30,"Variable":31,"EqualToOrAssign":32,"AddAssign":33,"MinusAssign":34,"MultiplyAssign":35,"DivideAssign":36,"True":37,"False":38,"Number":39,"String":40,"Null":41,"UnaryMinus":42,"%prec":43,"Not":44,"LeftParen":45,"RightParen":46,"Add":47,"Minus":48,"Multiply":49,"Divide":50,"Or":51,"And":52,"Xor":53,"EqualTo":54,"NotEqualTo":55,"GreaterThan":56,"GreaterThanOrEqualTo":57,"LessThan":58,"LessThanOrEqualTo":59,"functionResultExpression":60,"arguments":61,"Comma":62,"argument":63,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EndOfInput",8:"BeginCommand",9:"If",11:"EndCommand",12:"EndIf",14:"Else",15:"ElseIf",21:"Text",22:"ShortcutOption",23:"Indent",24:"Dedent",25:"CommandCall",26:"OptionStart",27:"OptionEnd",28:"OptionDelimit",29:"Identifier",30:"Set",31:"Variable",32:"EqualToOrAssign",33:"AddAssign",34:"MinusAssign",35:"MultiplyAssign",36:"DivideAssign",37:"True",38:"False",39:"Number",40:"String",41:"Null",42:"UnaryMinus",43:"%prec",44:"Not",45:"LeftParen",46:"RightParen",47:"Add",48:"Minus",49:"Multiply",50:"Divide",51:"Or",52:"And",53:"Xor",54:"EqualTo",55:"NotEqualTo",56:"GreaterThan",57:"GreaterThanOrEqualTo",58:"LessThan",59:"LessThanOrEqualTo",62:"Comma"},
productions_: [0,[3,2],[4,2],[4,2],[4,1],[4,1],[6,8],[6,6],[13,7],[13,8],[13,6],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[16,5],[16,9],[17,3],[18,3],[19,5],[20,6],[20,6],[20,6],[20,6],[20,6],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,4],[10,4],[10,2],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,1],[60,4],[61,3],[61,1],[63,1],[63,1],[63,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
JSON.stringify($$[$0-1], null, "  "); return $$[$0-1];
break;
case 2: case 3:
this.$ = $$[$0-1].concat([$$[$0]]);
break;
case 4: case 5: case 53:
this.$ = [$$[$0]];
break;
case 6:
this.$ = new yy.IfNode($$[$0-5], $$[$0-3]);
break;
case 7:
this.$ = new yy.IfElseNode($$[$0-3], $$[$0-1], $$[$0]);
break;
case 8:
this.$ = new yy.ElseNode($$[$0-3]);
break;
case 9:
this.$ = new yy.ElseIfNode($$[$0-5], $$[$0-3]);
break;
case 10:
this.$ = new yy.ElseIfNode($$[$0-3], $$[$0-1], $$[$0]);
break;
case 11: case 12: case 13: case 14: case 15: case 50:
this.$ = $$[$0];
break;
case 16:
this.$ = new yy.TextNode($$[$0], this._$);
break;
case 17:
this.$ = new yy.DialogOptionNode($$[$0-3], $$[$0-1], this._$);
break;
case 18:
this.$ = new yy.ConditionalDialogOptionNode($$[$0-7], $$[$0-1], $$[$0-4], this._$);
break;
case 19:
this.$ = new yy.CommandNode($$[$0-1], this._$);
break;
case 20:
this.$ = new yy.JumpNode($$[$0-1], this._$);
break;
case 21:
this.$ = new yy.LinkNode($$[$0-3], $$[$0-1], this._$);
break;
case 22:
this.$ = new yy.SetVariableEqualToNode($$[$0-3].substring(1), $$[$0-1]);
break;
case 23:
this.$ = new yy.SetVariableAddNode($$[$0-3].substring(1), $$[$0-1]);
break;
case 24:
this.$ = new yy.SetVariableMinusNode($$[$0-3].substring(1), $$[$0-1]);
break;
case 25:
this.$ = new yy.SetVariableMultipyNode($$[$0-3].substring(1), $$[$0-1]);
break;
case 26:
this.$ = new yy.SetVariableDivideNode($$[$0-3].substring(1), $$[$0-1]);
break;
case 27: case 28:
this.$ = new yy.BooleanLiteralNode($$[$0]);
break;
case 29: case 54:
this.$ = new yy.NumericLiteralNode($$[$0]);
break;
case 30: case 55:
this.$ = new yy.StringLiteralNode($$[$0]);
break;
case 31:
this.$ = new yy.NullLiteralNode($$[$0]);
break;
case 32: case 56:
this.$ = new yy.VariableNode($$[$0].substring(1));
break;
case 33:
this.$ = new yy.UnaryMinusExpressionNode($$[$0-2]);
break;
case 34:
this.$ = new yy.UnaryMinusExpressionNode($$[$0-2].substring(1));
break;
case 35:
this.$ = new yy.NegatedBooleanExpressionNode($$[$0]);
break;
case 36:
this.$ = new yy.ArithmeticExpressionNode($$[$0-1]);
break;
case 37:
this.$ = new yy.ArithmeticExpressionAddNode($$[$0-2], $$[$0]);
break;
case 38:
this.$ = new yy.ArithmeticExpressionMinusNode($$[$0-2], $$[$0]);
break;
case 39:
this.$ = new yy.ArithmeticExpressionMultiplyNode($$[$0-2], $$[$0]);
break;
case 40:
this.$ = new yy.ArithmeticExpressionDivideNode($$[$0-2], $$[$0]);
break;
case 41:
this.$ = new yy.BooleanOrExpressionNode($$[$0-2], $$[$0]);
break;
case 42:
this.$ = new yy.BooleanAndExpressionNode($$[$0-2], $$[$0]);
break;
case 43:
this.$ = new yy.BooleanXorExpressionNode($$[$0-2], $$[$0]);
break;
case 44:
this.$ = new yy.EqualToExpressionNode($$[$0-2], $$[$0]);
break;
case 45:
this.$ = new yy.NotEqualToExpressionNode($$[$0-2], $$[$0]);
break;
case 46:
this.$ = new yy.GreaterThanExpressionNode($$[$0-2], $$[$0]);
break;
case 47:
this.$ = new yy.GreaterThanOrEqualToExpressionNode($$[$0-2], $$[$0]);
break;
case 48:
this.$ = new yy.LessThanExpressionNode($$[$0-2], $$[$0]);
break;
case 49:
this.$ = new yy.LessThanOrEqualToExpressionNode($$[$0-2], $$[$0]);
break;
case 51:
this.$ = new yy.FunctionResultNode($$[$0-3], $$[$0-1]);
break;
case 52:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:$V0,16:6,17:7,18:8,19:9,20:10,21:$V1,22:$V2,26:$V3},{1:[3]},{5:[1,14],6:15,7:16,8:$V0,16:6,17:7,18:8,19:9,20:10,21:$V1,22:$V2,26:$V3},o($V4,[2,4]),o($V4,[2,5]),{9:$V5,25:$V6,30:$V7},o($V4,[2,11]),o($V4,[2,12]),o($V4,[2,13]),o($V4,[2,14]),o($V4,[2,15]),o($V4,[2,16]),{21:[1,20]},{21:[1,21]},{1:[2,1]},o($V4,[2,2]),o($V4,[2,3]),{10:22,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{11:[1,34]},{31:[1,35]},{8:[1,37],23:[1,36]},{27:[1,38],28:[1,39]},{11:[1,40],47:$Vi,48:$Vj,49:$Vk,50:$Vl,51:$Vm,52:$Vn,53:$Vo,54:$Vp,55:$Vq,56:$Vr,57:$Vs,58:$Vt,59:$Vu},o($Vv,[2,27]),o($Vv,[2,28]),o($Vv,[2,29]),o($Vv,[2,30]),o($Vv,[2,31]),o($Vv,[2,32]),{31:[1,55],39:[1,54]},{10:56,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:57,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},o($Vv,[2,50]),{45:[1,58]},o($V4,[2,19]),{32:[1,59],33:[1,60],34:[1,61],35:[1,62],36:[1,63]},{4:64,6:3,7:4,8:$V0,16:6,17:7,18:8,19:9,20:10,21:$V1,22:$V2,26:$V3},{9:[1,65]},o($V4,[2,20]),{29:[1,66]},{4:67,6:3,7:4,8:$V0,16:6,17:7,18:8,19:9,20:10,21:$V1,22:$V2,26:$V3},{10:68,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:69,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:70,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:71,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:72,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:73,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:74,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:75,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:76,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:77,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:78,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:79,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:80,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{43:[1,81]},{43:[1,82]},o($Vv,[2,35]),{46:[1,83],47:$Vi,48:$Vj,49:$Vk,50:$Vl,51:$Vm,52:$Vn,53:$Vo,54:$Vp,55:$Vq,56:$Vr,57:$Vs,58:$Vt,59:$Vu},{31:$Vw,39:$Vx,40:$Vy,61:84,63:85},{10:89,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:90,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:91,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:92,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{10:93,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{6:15,7:16,8:$V0,16:6,17:7,18:8,19:9,20:10,21:$V1,22:$V2,24:[1,94],26:$V3},{10:95,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},{27:[1,96]},{6:15,7:16,8:[1,97],13:98,16:6,17:7,18:8,19:9,20:10,21:$V1,22:$V2,26:$V3},o($Vz,[2,37],{49:$Vk,50:$Vl}),o($Vz,[2,38],{49:$Vk,50:$Vl}),o($Vv,[2,39]),o($Vv,[2,40]),o([11,46,51],[2,41],{47:$Vi,48:$Vj,49:$Vk,50:$Vl,52:$Vn,53:$Vo,54:$Vp,55:$Vq,56:$Vr,57:$Vs,58:$Vt,59:$Vu}),o([11,46,51,52],[2,42],{47:$Vi,48:$Vj,49:$Vk,50:$Vl,53:$Vo,54:$Vp,55:$Vq,56:$Vr,57:$Vs,58:$Vt,59:$Vu}),o([11,46,51,52,53],[2,43],{47:$Vi,48:$Vj,49:$Vk,50:$Vl,54:$Vp,55:$Vq,56:$Vr,57:$Vs,58:$Vt,59:$Vu}),o($VA,[2,44],{47:$Vi,48:$Vj,49:$Vk,50:$Vl}),o($VA,[2,45],{47:$Vi,48:$Vj,49:$Vk,50:$Vl}),o($VA,[2,46],{47:$Vi,48:$Vj,49:$Vk,50:$Vl}),o($VA,[2,47],{47:$Vi,48:$Vj,49:$Vk,50:$Vl}),o($VA,[2,48],{47:$Vi,48:$Vj,49:$Vk,50:$Vl}),o($VA,[2,49],{47:$Vi,48:$Vj,49:$Vk,50:$Vl}),{42:[1,99]},{42:[1,100]},o($Vv,[2,36]),{46:[1,101],62:[1,102]},o($VB,[2,53]),o($VB,[2,54]),o($VB,[2,55]),o($VB,[2,56]),{11:[1,103],47:$Vi,48:$Vj,49:$Vk,50:$Vl,51:$Vm,52:$Vn,53:$Vo,54:$Vp,55:$Vq,56:$Vr,57:$Vs,58:$Vt,59:$Vu},{11:[1,104],47:$Vi,48:$Vj,49:$Vk,50:$Vl,51:$Vm,52:$Vn,53:$Vo,54:$Vp,55:$Vq,56:$Vr,57:$Vs,58:$Vt,59:$Vu},{11:[1,105],47:$Vi,48:$Vj,49:$Vk,50:$Vl,51:$Vm,52:$Vn,53:$Vo,54:$Vp,55:$Vq,56:$Vr,57:$Vs,58:$Vt,59:$Vu},{11:[1,106],47:$Vi,48:$Vj,49:$Vk,50:$Vl,51:$Vm,52:$Vn,53:$Vo,54:$Vp,55:$Vq,56:$Vr,57:$Vs,58:$Vt,59:$Vu},{11:[1,107],47:$Vi,48:$Vj,49:$Vk,50:$Vl,51:$Vm,52:$Vn,53:$Vo,54:$Vp,55:$Vq,56:$Vr,57:$Vs,58:$Vt,59:$Vu},o($V4,[2,17]),{11:[1,108],47:$Vi,48:$Vj,49:$Vk,50:$Vl,51:$Vm,52:$Vn,53:$Vo,54:$Vp,55:$Vq,56:$Vr,57:$Vs,58:$Vt,59:$Vu},o($V4,[2,21]),{9:$V5,12:[1,109],14:$VC,15:$VD,25:$V6,30:$V7},o($V4,[2,7]),o($Vv,[2,33]),o($Vv,[2,34]),o($Vv,[2,51]),{31:$Vw,39:$Vx,40:$Vy,63:112},o($V4,[2,22]),o($V4,[2,23]),o($V4,[2,24]),o($V4,[2,25]),o($V4,[2,26]),{23:[1,113]},{11:[1,114]},{11:[1,115]},{10:116,29:$V8,31:$V9,37:$Va,38:$Vb,39:$Vc,40:$Vd,41:$Ve,42:$Vf,44:$Vg,45:$Vh,60:32},o($VB,[2,52]),{4:117,6:3,7:4,8:$V0,16:6,17:7,18:8,19:9,20:10,21:$V1,22:$V2,26:$V3},o($V4,[2,6]),{4:118,6:3,7:4,8:$V0,16:6,17:7,18:8,19:9,20:10,21:$V1,22:$V2,26:$V3},{11:[1,119],47:$Vi,48:$Vj,49:$Vk,50:$Vl,51:$Vm,52:$Vn,53:$Vo,54:$Vp,55:$Vq,56:$Vr,57:$Vs,58:$Vt,59:$Vu},{6:15,7:16,8:$V0,16:6,17:7,18:8,19:9,20:10,21:$V1,22:$V2,24:[1,120],26:$V3},{6:15,7:16,8:[1,121],16:6,17:7,18:8,19:9,20:10,21:$V1,22:$V2,26:$V3},{4:122,6:3,7:4,8:$V0,16:6,17:7,18:8,19:9,20:10,21:$V1,22:$V2,26:$V3},o($V4,[2,18]),{9:$V5,12:[1,123],25:$V6,30:$V7},{6:15,7:16,8:[1,124],13:125,16:6,17:7,18:8,19:9,20:10,21:$V1,22:$V2,26:$V3},{11:[1,126]},{9:$V5,12:[1,127],14:$VC,15:$VD,25:$V6,30:$V7},o($V4,[2,10]),o($V4,[2,8]),{11:[1,128]},o($V4,[2,9])],
defaultActions: {14:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parserNode;
exports.Parser = parserNode.Parser;
exports.parse = function () { return parserNode.parse.apply(parserNode, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}