<?php
    // if(isset($_POST['submit'])){
    //     $fname=$_POST['fname'];
    //     $email=$_POST['email'];
    //     $phone=$_POST['phone'];
    //     $comment=$_POST['comment'];

    //     $to='ccook@fireflyagency.com';
    //     $subject='InsuranceCook Form Submission';
    //     $message='Name: '.$fname.'\n'.'Phone: '.$phone.'\n'. 'Comment: '.'\n\n'.$comment;
    //     $headers='From: '.$email;

    //     if(mail($to, $subject, $message, $headers)){
    //         echo '<h1>Sent Successfully: Thank you'.' '.$name.', We will conact you shortly!</h1>';
    //     }
    //     else{
    //         echo 'Something went wrong! Try resubmitting form.';
    //     }
    // }
    admin.firestore().collection('mail').add({
        to: 'ccook@fireflyagency.com',
        message: {
          subject: 'Hello from Firebase!',
          html: 'This is an <code>HTML</code> email body.',
?>