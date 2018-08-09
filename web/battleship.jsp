<%--
  Created by IntelliJ IDEA.
  User: BingqianLee
  Date: 2018/8/6
  Time: 11:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Game</title>
    <link rel="stylesheet" href="css/battleship.css">
    <script src="js/battleship.js"></script>
</head>
<body>
<div id="board">

    <table>
        <tr>
            <td id="A0"></td>
            <td id="A1"></td>
            <td id="A2"></td>
            <td id="A3"></td>
            <td id="A4"></td>
            <td id="A5"></td>
            <td id="A6"></td>
        </tr>
        <tr>
            <td id="B0"></td>
            <td id="B1"></td>
            <td id="B2"></td>
            <td id="B3"></td>
            <td id="B4"></td>
            <td id="B5"></td>
            <td id="B6"></td>
        </tr>
        <tr>
            <td id="C0"></td>
            <td id="C1"></td>
            <td id="C2"></td>
            <td id="C3"></td>
            <td id="C4"></td>
            <td id="C5"></td>
            <td id="C6"></td>
        </tr>
        <tr>
            <td id="D0"></td>
            <td id="D1"></td>
            <td id="D2"></td>
            <td id="D3"></td>
            <td id="D4"></td>
            <td id="D5"></td>
            <td id="D6"></td>
        </tr>
        <tr>
            <td id="E0"></td>
            <td id="E1"></td>
            <td id="E2"></td>
            <td id="E3"></td>
            <td id="E4"></td>
            <td id="E5"></td>
            <td id="E6"></td>
        </tr>
        <tr>
            <td id="F0"></td>
            <td id="F1"></td>
            <td id="F2"></td>
            <td id="F3"></td>
            <td id="F4"></td>
            <td id="F5"></td>
            <td id="F6"></td>
        </tr>
        <tr>
            <td id="G0"></td>
            <td id="G1"></td>
            <td id="G2"></td>
            <td id="G3"></td>
            <td id="G4"></td>
            <td id="G5"></td>
            <td id="G6"></td>
        </tr>
    </table>


</div>

<div id="form">
    <div id="messageArea"></div>
    <form>
        <input type="text" id="guessInput" placeholder="A0">
        <input type="button" id="fireButton" value="Fire!">
    </form>
</div>


</body>
</html>
