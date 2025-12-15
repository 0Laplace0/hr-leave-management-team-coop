import Swal from "sweetalert2";

export const alertSuccess = (title, text = "") =>
  Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonText: "ตกลง",
    confirmButtonColor: "#2f6df6",
  });

export const alertError = (title, text = "") =>
  Swal.fire({
    icon: "error",
    title,
    text,
    confirmButtonText: "ตกลง",
    confirmButtonColor: "#dc2626",
  });

export const alertConfirm = (title, text = "", confirmText = "ยืนยัน") =>
  Swal.fire({
    icon: "warning",
    title,
    text,
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: "ยกเลิก",
    confirmButtonColor: "#2f6df6",
    cancelButtonColor: "#6b7280",
    reverseButtons: true,
  });
