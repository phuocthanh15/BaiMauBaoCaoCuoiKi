$(document).ready(function () {
    let i = 1;

    function ktDangKY() {
        let tendn = $("#txtDN").val();
        let btcq =/^([a-z]*)*([a-z]*)$/;
        if (tendn === "") {
            $("#errDN").html("Tên đăng nhập không được rỗng");
            return false;
        } else if (btcq.test(tendn)==false) {
            $("#errDN").html("Tên đăng nhập không hợp lệ");
            $("#txtDN").focus();
            return false;
        }
        $("#errDN").html("(*)");
        return true;
    }

    $("#txtDN").blur(function (e) {
        ktDangKY();
    });
    function kiemtraMK() {
        let mk = $("#txtMK").val().trim();
        let reght = /^[A-Za-z0-9(!@#$%^&*()_ ]{6,20}$/;
        // alert(mk);
        if (mk.length === 0) {
            $("#errMK").html("Mật khẩu không được để trống");
            $("#txtMK").focus();
            return false;
        } else if (reght.test(mk)==false) {
            $("#errMK").html("MK quá ngắn, không hợp lệ");
            $("#txtMK").focus();
            return false;
        }
        $("#errMK").html("(Hợp lệ)");
        return true;
    }

    $("#txtMK").blur(function () {
        kiemtraMK();
    });
    function kiemtraXN() {
        let mk = $("#txtMK").val().trim();
        let reght = /^[A-Za-z0-9(!@#$%^&*()_ ]{6,20}$/;
        let xn =$("#txtXNMK").val().trim();
        // alert(mk);
        if (xn.length === 0) {
            $("#errXNMK").html("Mật khẩu không được để trống");
            $("#txtXNMK").focus();
            return false;
        } else if (reght.test(mk)==false) {
            $("#errXNMK").html("XNMK quá ngắn, không hợp lệ");
            $("#txtXNMK").focus();
            return false;
        }
         else if (xn != mk) {
        $("#errXNMK").html("XNMK không đúng");
        $("#txtXNMK").focus();
        return false;
    }
        $("#errXNMK").html("(Hợp lệ)");
        return true;
    }

    $("#txtXNMK").blur(function () {
        kiemtraXN();
    });

    function ktdiachi() {
        let dc = $("#txtDC").val();
        let btcq =/^([a-z-0-9]*)*([a-z-0-9]*)$/;
        if (dc === "") {
            $("#errDC").html("Địa chỉ không được rỗng");
            return false;
        } else if (btcq.test(dc)==false) {
            $("#errDC").html("Địa chỉ không hợp lệ");
            $("#txtDC").focus();
            return false;
        }
        $("#errDC").html("(*)");
        return true;
      }

        $("#txtDC").blur(function (e) {
        ktdiachi();
    });

    function ktSDT() {
        let sdt = $("#txtSDT").val();
        let btcq = /^(03|09|08|07)[0-9]{8}$/;
        if (sdt === "") {
            $("#errSDT").html("Số điện thoại không được rỗng");
            return false;
        } else if (btcq.test(sdt)) {
            $("#errSDT").html("(*)");
            return true;
        } else {
            $("#errSDT").html("Số điện thoại có định dạng là 10 con số trong đó luôn bắt đầu 09,03,08 hoặc 07.");
            return false;
        }
    }

    $("#txtSDT").blur(function (e) {
        ktSDT();
    });

    function ktemail() {
        let em = $("#txtEmail").val();
        if (em === "") {
            $("#errEmail").html("Địa chỉ không được phép rỗng");
            return false;
        } else {
            $("#errEmail").html("(*)");
            return true;
        }
    }
    $("#txtEmail").blur(function (e) {
        ktemail();
    });
});