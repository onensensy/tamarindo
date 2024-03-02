@extends('base')

@section('title', 'Tamarindo - Remote Controller')

@push('scripts')
    @vite(['resources/assets/js/remote/app.ts'])
@endpush
