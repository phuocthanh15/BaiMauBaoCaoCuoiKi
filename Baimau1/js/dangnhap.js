$(document).ready(function () {
    let i = 1;

    function ktDangnhap() {
        let tendn = $("#txtTDN").val();
        let btcq =/^([a-z]*)*([a-z]*)$/;
        if (tendn === "") {
            $("#errTDN").html("Tên đăng nhập không được rỗng");
            return false;
        } else if (btcq.test(tendn)==false) {
            $("#errTDN").html("Tên đăng nhập không hợp lệ");
            $("#txtTDN").focus();
            return false;
        }
        $("#errTDN").html("(*)");
        return true;
    }

    $("#txtTDN").blur(function (e) {
        ktDangnhap();
    });
    function kiemtraMK() {
        let mk = $("#txtMKDN").val().trim();
        let reght = /^[A-Za-z0-9(!@#$%^&*()_ ]{6,20}$/;
        // alert(mk);
        if (mk.length === 0) {
            $("#errMKDN").html("Mật khẩu không được để trống");
            $("#txtMKDN").focus();
            return false;
        } else if (reght.test(mk)==false) {
            $("#errMKDN").html("MK quá ngắn, không hợp lệ");
            $("#txtMKDN").focus();
            return false;
        }
        $("#errMKDN").html("(Hợp lệ)");
        return true;
    }

    $("#txtMKDN").blur(function (e) {
        kiemtraMK();
    });

});