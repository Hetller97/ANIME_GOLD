// async function checkAccess() {
//   const inputCode = document.getElementById("accessCode").value;
//   const errorEl = document.getElementById("error");

//   try {
//     const doc = await db.collection("settings").doc("access_code").get();
//     if (!doc.exists) {
//       errorEl.textContent = "فشل في الوصول إلى رمز الدخول.";
//       return;
//     }
//     const correctCode = doc.data().value;
//     if (inputCode === correctCode) {
//       localStorage.setItem("loggedIn", "true");
//       window.location.href = "dashboard.html";
//     } else {
//       errorEl.textContent = "رمز الدخول غير صحيح.";
//     }
//   } catch (error) {
//     console.error(error);
//     errorEl.textContent = "حدث خطأ في التحقق.";
//   }
// }


async function checkAccess() {
  const inputCode = document.getElementById("accessCode").value;
  const errorEl = document.getElementById("error");

  try {
    const accessDoc = await db.collection("settings").doc("access_code").get();
    const timesDoc = await db.collection("settings").doc("times_code").get();

    if (!accessDoc.exists || !timesDoc.exists) {
      errorEl.textContent = "فشل في الوصول إلى رموز الدخول.";
      return;
    }

    const accessCode = accessDoc.data().value;
    const timesCode = timesDoc.data().value;

    if (inputCode === accessCode) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    } else if (inputCode === timesCode) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "../أقاليم/TimesM.html";
    } else {
      errorEl.textContent = "رمز الدخول غير صحيح.";
    }

  } catch (error) {
    console.error(error);
    errorEl.textContent = "حدث خطأ في التحقق.";
  }
}
